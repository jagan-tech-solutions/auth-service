var express = require("express");
var router = express.Router();
var url = require("url");
var config = require("../config");

const { throwError, sendResponse, getGitRepoDetails } = require("../utils");
const { Octokit } = require("@octokit/rest");
const { logger } = require("../logger");
const octokit = new Octokit({
  auth: config.app.git_token,
});

const getCurrentCommitSHA = async (key) => {
  try {
    const { repoOwner, repoName, repoBranch } = getGitRepoDetails(key);
    logger.info("getCurrentCommitSHA request " + key);

    const response = await octokit.git.getRef({
      owner: repoOwner,
      repo: repoName,
      ref: `heads/${repoBranch}`,
    });
    logger.info("getCurrentCommitSHA response " + response.data.object.sha);
    return response.data;
  } catch (e) {
    throwError("REFERENCE NOT FOUND", "REFERENCE NOT FOUND", 400);
  }
};

const createOrUpdateFile = async (key, path, content, sha, message) => {
  try {
    const { repoOwner, repoName, repoBranch } = getGitRepoDetails(key);
    logger.info("createOrUpdateFile request " + key + message);
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: repoOwner,
      repo: repoName,
      path: path,
      message: message,
      content: Buffer.from(JSON.stringify(content)).toString("base64"),
      branch: repoBranch,
      sha: sha, // Provide the commit SHA here
    });
    logger.info("createOrUpdateFile response " + response.data);
    return response.data;
  } catch (error) {
    logger.error(error.stack || error);

    throwError("CREATE/UPDATE FAILED", "CREATE/UPDATE FAILED", 400);
  }
};

const getExistingContent = async (key, path, content, sha, message) => {
  try {
    const { repoOwner, repoName, repoBranch } = getGitRepoDetails(key);

    logger.info("getExistingContent request " + key + path);

    // Get the existing content of the file
    const response = await octokit.repos.getContent({
      owner: repoOwner,
      repo: repoName,
      path: path,
      ref: sha,
    });
    const currentData = response?.data?.content&&Buffer.from(response?.data?.content, "base64").toString();
    logger.info("getExistingContent response found " + key + currentData);

    return currentData;
  } catch (error) {
    logger.info(error?.status,error?.response?.data?.message);
    if(error?.response?.data?.message=='Not Found'){
        return null
    }
    // data: {
    //     message: 'Not Found'
    throwError("FAILED IN GETTING EXISTING REQUEST", "FAILED IN GETTING EXISTING REQUEST", 400);
  }
};

export { getCurrentCommitSHA, getExistingContent, createOrUpdateFile };

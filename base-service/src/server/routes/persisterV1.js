var express = require("express");
var router = express.Router();
var url = require("url");
var config = require("../config");

var {
  search_muster,
  search_individual,
  search_localization,
} = require("../api");

const { asyncMiddleware } = require("../middlewares/asyncMiddleware");
const { throwError, sendResponse, getGitRepoDetails, getMdmsURL } = require("../utils");
const { Octokit } = require("@octokit/rest");
const { logger } = require("../logger");
const {
  getCurrentCommitSHA,
  getExistingContent,
  createOrUpdateFile,
} = require("../utils/persisterUtils");
const octokit = new Octokit({
  auth: config.app.git_token,
});

const newObj = {
  tenantId: "in.ka",
  moduleName: "test",
  sample: [
    {
      cityName: "Abohar",
      locale: "in_en",
      tenantId: "pb.abohar",
    },
  ],
};

const newObj1 = {
  ...newObj,
  updatedon: "22222",
};

const createOrUpdate = async (payload, req, res) => {


    
  const { mode = "create", key, path, content, message } = payload;

  const commitSHAObject = await getCurrentCommitSHA(key);
  const commitSHA = commitSHAObject?.object?.sha;
  logger.info("commitSha :: " + commitSHA);
  const existingContent = await getExistingContent(
    key,
    path,
    content,
    commitSHA,
    message
  );
  if (existingContent == null && mode == "update") {
    throwError(`mentioned file :: ${path} not exists`, "FILE_NOT_FOUND", 400);
  } else if (existingContent != null && mode == "create") {
    throwError(`mentioned file :: ${path} exists`, "FILE_ALREADY_EXISTS", 400);
  }
  const addDataResponse = await createOrUpdateFile(
    key,
    path,
    content,
    commitSHA,
    message
  );
  if (addDataResponse) {
    sendResponse(res, { status: "SUCCESS", path, key, message }, req);
  }


};

router.post(
  "/create",
  asyncMiddleware(async function (req, res, next) {

    const key = req.body.key;//to be removed
    const content = req.body.content;//to be removed
    const path = `data/${getMdmsURL(content?.tenantId,content?.moduleName,content?.masterName)}`;
    const message = "Added some data in " + path;
    await createOrUpdate(
      { mode: "create", key, path, content, message },
      req,
      res
    );

  })

);

router.post(
  "/update",
  asyncMiddleware(async function (req, res, next) {

    const key = req.body.key;//to be removed
    const content = req.body.content;//to be removed
    const path = `data/${getMdmsURL(content?.tenantId,content?.moduleName,content?.masterName)}`;
    const message = "Updated some data in " + path;
   await createOrUpdate({ mode: "update", key, path, content, message }, req, res);
  })
);
router.post(
  "/upsert",
  asyncMiddleware(async function (req, res, next) {
    const key = req.body.key;//to be removed
    const content = req.body.content;//to be removed
    const path = `data/${getMdmsURL(content?.tenantId,content?.moduleName,content?.masterName)}`;
    const message = "Upserted some data in " + path;

   await  createOrUpdate({ mode: "upsert", key, path, content, message }, req, res);
  })
),
  (module.exports = router);

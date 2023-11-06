var express = require("express");
var router = express.Router();
var url = require("url");
var config = require("../config");

const URL = "https://raw.githubusercontent.com";
const ORG = "jk-techsolutions";
const REPO = "master-data";
const BRANCH = "master";
const { asyncMiddleware } = require("../middlewares/asyncMiddleware");
const { throwError, sendResponse } = require("../utils");
const { httpRequest } = require("../api/request");
const { log } = require("console");


router.post(
  "/v1/_search",
  asyncMiddleware(async function (req, res, next) {
   
    const MdmsCriteria = req?.body?.MdmsCriteria;
    const { tenantId, moduleDetails } = MdmsCriteria;
    const { moduleName, masterDetails } = moduleDetails?.[0] || {};
    const { name } = masterDetails?.[0] || {};

    const mdmsResponse = await httpRequest(
      `${URL}/${ORG}/${REPO}/${BRANCH}/data/${tenantId?.replace(
        ".",
        "/"
      )}/${moduleName}/${name}.json`,
      {},
      {},
      "get"
    );
    const response = {};
    response[moduleName] = {
      [name]: mdmsResponse?.[name],
    };
    sendResponse(
      res,
      {
        MdmsRes: {
          ...response,
        },
      },
      req
    );
  })
);

module.exports = router;

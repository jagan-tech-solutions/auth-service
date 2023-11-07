var express = require("express");
var router = express.Router();
var url = require("url");
var config = require("../config");
const { v4: uuidv4 } = require("uuid");

const URL = "https://raw.githubusercontent.com";
const ORG = "jk-techsolutions";
const REPO = "master-data";
const BRANCH = "master";
const { asyncMiddleware } = require("../middlewares/asyncMiddleware");
const { throwError, sendResponse } = require("../utils");
const { httpRequest } = require("../api/request");
const { log } = require("console");
const { query } = require("../database");
const { logger } = require("../logger");

// https://raw.githubusercontent.com/jk-techsolutions/master-data/raw/master/data/in/ka/test/sample.json
router.post(
  "/_search",
  asyncMiddleware(async function (req, res, next) {
    var tenantId = req.query.tenantId;
    var module = req.query.module;
    var locale = req.query.locale;

    // if(!locResponse|| !locResponse?.messages || locResponse?.messages?.length==0){
    //   throwError("LOCALISATION NOT FOUND","LOCALISATION NOT FOUND",400)
    // }
    await query("SELECT * from jk_app_users", (err, response) => {
      if (err) {
        logger.error(err.stack);
        throwError("INTERNAL SERVER ERROR", "INTERNAL SERVER ERROR", 400);
      } else {
        sendResponse(
          res,
          { searchResponse: response?.rows, count: response?.rows?.length },
          req
        );
      }
    });

    // let messages={}
    // locResponse.messages.map(message=>{messages[message.code]=message.message})

    // let messages=locResponse.messages.map(message=>({code:message.code,message:message.message}))
  })
);

router.post(
  "/create",
  asyncMiddleware(async function (req, res, next) {
    const users = req?.body?.users;

    const userResults = [];

    for (const user of users) {
      const insertQuery = `
        INSERT INTO jk_app_users (uuid, user_name, name, mobile_number, email_id, type, active)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`;
      const values = [
        uuidv4(),
        user.user_name,
        user.name,
        user.mobile_number,
        user.email_id,
        user.type,
        user.active,
      ];
      const result = await query(insertQuery, values);
      userResults.push(result.rows[0]);
    }

    sendResponse(res, { userResults }, req);

    // if(!locResponse|| !locResponse?.messages || locResponse?.messages?.length==0){
    //   throwError("LOCALISATION NOT FOUND","LOCALISATION NOT FOUND",400)
    // }
    // await query("SELECT * from eg_app_users", (err, response) => {
    //   if (err) {
    //     console.log(err.stack);
    //   } else {
    //     console.log(response.rows);
    //     sendResponse(res, { searchResponse:response?.rows,count : response?.rows?.length }, req);

    //   }
    // });

    // let messages={}
    // locResponse.messages.map(message=>{messages[message.code]=message.message})

    // let messages=locResponse.messages.map(message=>({code:message.code,message:message.message}))
  })
);

router.post(
  "/others/_search",
  asyncMiddleware(async function (req, res, next) {
    // var module = req.query.module;
    // var master = req.query.master;
    const MdmsCriteria = req?.body?.MdmsCriteria;
    const { tenantId, moduleDetails } = MdmsCriteria;
    const { moduleName, masterDetails } = moduleDetails?.[0] || {};
    const { name } = masterDetails?.[0] || {};
    // const names = await httpRequest('https://raw.githubusercontent.com/jeanphorn/wordlist/master/usernames.txt',{},{});

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

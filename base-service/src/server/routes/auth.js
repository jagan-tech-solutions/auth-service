var express = require("express");
var router = express.Router();
var url = require("url");
var config = require("../config");


const { asyncMiddleware } = require("../middlewares/asyncMiddleware");
const { throwError, sendResponse } = require("../utils");


router.post(
  "/getLocalization",
  asyncMiddleware(async function (req, res, next) {
    var tenantId = req.query.tenantId;
    var module = req.query.module;
    var locale = req.query.locale;

    // if(!locResponse|| !locResponse?.messages || locResponse?.messages?.length==0){
    //   throwError("LOCALISATION NOT FOUND","LOCALISATION NOT FOUND",400)
    // }

    // let messages={}
    // locResponse.messages.map(message=>{messages[message.code]=message.message})
  
    // let messages=locResponse.messages.map(message=>({code:message.code,message:message.message}))
    let messages = [{"code":"Dummy"}]
    sendResponse(res,{messages},req);
  })
)

module.exports = router;

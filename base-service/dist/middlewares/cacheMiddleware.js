"use strict";

var _require = require("../utils"),
  errorResponder = _require.errorResponder,
  sendResponse = _require.sendResponse,
  appCache = _require.appCache;
module.exports = function (req, res, next) {
  try {
    var cacheData = appCache.get(req.originalUrl);
    if (cacheData) {
      sendResponse(res, cacheData, req, 304);
    } else {
      next();
    }
  } catch (error) {
    error.status = 400;
    error.code = "MISSING_PARAMETERS_IN_REQUESTINFO";
    errorResponder(error, req, res);
  }
};
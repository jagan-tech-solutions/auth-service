"use strict";

var _require = require("yup"),
  object = _require.object,
  string = _require.string;
var _require2 = require("../utils"),
  errorResponder = _require2.errorResponder;
var requestSchema = object({
  apiId: string().nullable(),
  action: string().nullable(),
  msgId: string().required(),
  authToken: string().nullable(),
  userInfo: object().nonNullable()
});
module.exports = function (req, res, next) {
  try {
    requestSchema.validateSync(req.body.RequestInfo);
    next();
  } catch (error) {
    error.status = 400;
    error.code = "MISSING_PARAMETERS_IN_REQUESTINFO";
    errorResponder(error, req, res);
  }
};
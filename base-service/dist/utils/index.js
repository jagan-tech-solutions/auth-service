"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var logger = require("../logger").logger;
var NodeCache = require("node-cache");

/*
  stdTTL: (default: 0) the standard ttl as number in seconds for every generated
   cache element. 0 = unlimited

  checkperiod: (default: 600) The period in seconds, as a number, used for the automatic
   delete check interval. 0 = no periodic check.

*/
var appCache = new NodeCache({
  stdTTL: 5 * 60 * 100,
  checkperiod: 120
});

/* 
Send The Error Response back to client with proper response code 
*/
var throwError = function throwError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Internal Server Error";
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "INTERNAL_SERVER_ERROR";
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var error = new Error(message);
  error.status = status;
  error.code = code;
  throw error;
};

/* 
Error Object
*/
var getErrorResponse = function getErrorResponse() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "INTERNAL_SERVER_ERROR";
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Some Error Occured!!";
  return {
    ResponseInfo: null,
    Errors: [{
      code: code,
      message: message,
      description: null,
      params: null
    }]
  };
};

/* 
Send The Response back to client with proper response code and response info
*/
var sendResponse = function sendResponse(res, response, req) {
  var code = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 200;
  if (code != 304) {
    appCache.set(req.originalUrl, _objectSpread({}, response));
  } else {
    logger.info("CACHED RESPONSE FOR :: " + req.originalUrl);
  }
  res.status(code != 304 ? code : 200).send(_objectSpread(_objectSpread({}, getResponseInfo(code)), response));
};

/* 
Response Object
*/
var getResponseInfo = function getResponseInfo() {
  var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return {
    ResponseInfo: {
      apiId: "bff-0.0.1",
      ver: "1",
      ts: new Date().getTime(),
      status: "successful",
      desc: code == 304 ? "cached-response" : "new-response"
    }
  };
};

/* 
Fallback Middleware function for returning 404 error for undefined paths
*/
var invalidPathHandler = function invalidPathHandler(request, response, next) {
  response.status(404);
  response.send(getErrorResponse("INVALID_PATH", "invalid path"));
};

/*
Error handling Middleware function for logging the error message
*/
var errorLogger = function errorLogger(error, request, response, next) {
  logger.error(error.stack);
  logger.error("error ".concat(error.message));
  next(error); // calling next middleware
};

/*
Error handling Middleware function reads the error message and sends back a response in JSON format
*/
var errorResponder = function errorResponder(error, request, response, next) {
  response.header("Content-Type", "application/json");
  var status = error.status || 500;
  response.status(status).send(getErrorResponse(error.code, error.message));
};
module.exports = {
  errorResponder: errorResponder,
  errorLogger: errorLogger,
  invalidPathHandler: invalidPathHandler,
  getResponseInfo: getResponseInfo,
  throwError: throwError,
  sendResponse: sendResponse,
  appCache: appCache
};
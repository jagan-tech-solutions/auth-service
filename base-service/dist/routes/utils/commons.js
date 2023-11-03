"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyCache = exports.getValue = exports.getTransformedLocale = exports.getLocalisationkey = exports.getDateInRequiredFormat = exports.findLocalisation = exports.convertFooterStringtoFunctionIfExist = void 0;
var _EnvironmentVariables = _interopRequireDefault(require("./EnvironmentVariables"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var axios = require("axios");
var get = require("lodash/get");
var NodeCache = require("node-cache");
var moment = require("moment-timezone");
var cache = new NodeCache({
  stdTTL: 300
});
var datetimezone = _EnvironmentVariables["default"].DATE_TIMEZONE;
var egovLocHost = _EnvironmentVariables["default"].EGOV_LOCALISATION_HOST;
var egovLocSearchCall = _EnvironmentVariables["default"].EGOV_LOCALISATION_SEARCH;
var defaultLocale = _EnvironmentVariables["default"].DEFAULT_LOCALISATION_LOCALE;
var defaultTenant = _EnvironmentVariables["default"].DEFAULT_LOCALISATION_TENANT;
var getTransformedLocale = function getTransformedLocale(label) {
  return label.toUpperCase().replace(/[.:-\s\/]/g, "_");
};

/**
 * This function returns localisation label from keys based on needs
 * This function does optimisation to fetch one module localisation values only once
 * @param {*} requestInfo - requestinfo from client
 * @param {*} localisationMap - localisation map containing localisation key,label fetched till now
 * @param {*} prefix - prefix to be added before key before fetching localisation ex:-"MODULE_NAME_MASTER_NAME"
 * @param {*} key - key to fetch localisation
 * @param {*} moduleName - "module name for fetching localisation"
 * @param {*} localisationModuleList - "list of modules for which localisation was already fetched"
 * @param {*} isCategoryRequired - ex:- "GOODS_RETAIL_TST-1" = get localisation for "GOODS"
 * @param {*} isMainTypeRequired  - ex:- "GOODS_RETAIL_TST-1" = get localisation for "RETAIL"
 * @param {*} isSubTypeRequired  - - ex:- "GOODS_RETAIL_TST-1" = get localisation for "GOODS_RETAIL_TST-1"
 */
exports.getTransformedLocale = getTransformedLocale;
var findLocalisation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(requestInfo, moduleList, codeList, pdfKey) {
    var cacheData, locale, cacheKey, statetenantid, url, request, headers, responseBody;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cacheData = null;
          locale = requestInfo.msgId;
          if (null != locale) {
            locale = locale.split("|");
            locale = locale.length > 1 ? locale[1] : defaultLocale;
          } else {
            locale = defaultLocale;
          }
          if (!(pdfKey != null)) {
            _context.next = 8;
            break;
          }
          cacheKey = pdfKey + '-' + locale;
          _context.next = 7;
          return verifyCache(cacheKey);
        case 7:
          cacheData = _context.sent;
        case 8:
          if (!(cacheData != null && Object.keys(cacheData).length >= 1)) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", cacheData);
        case 12:
          statetenantid = get(requestInfo, "userInfo.tenantId", defaultTenant).split(".")[0];
          url = egovLocHost + egovLocSearchCall;
          console.log(url, 'uuuu');
          request = {
            RequestInfo: requestInfo,
            messageSearchCriteria: {
              tenantId: statetenantid,
              locale: locale,
              codes: []
            }
          };
          request.messageSearchCriteria.module = moduleList.toString();
          request.messageSearchCriteria.codes = codeList.toString().split(",");
          headers = {
            headers: {
              "content-type": "application/json;charset=UTF-8",
              accept: "application/json, text/plain, */*"
            }
          };
          console.log(request, 'requestrequestrequest');
          _context.next = 22;
          return axios.post(url, request, headers).then(function (response) {
            console.log(response, 'rresss');
            return response;
          })["catch"](function (error) {
            throw error;
          });
        case 22:
          responseBody = _context.sent;
          if (pdfKey != null) cache.set(pdfKey, responseBody.data);
          return _context.abrupt("return", responseBody.data);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function findLocalisation(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
exports.findLocalisation = findLocalisation;
var verifyCache = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pdfKey) {
    var cacheData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cacheData = null;
          if (!cache.has(pdfKey)) {
            _context2.next = 6;
            break;
          }
          cacheData = cache.get(pdfKey);
          return _context2.abrupt("return", Promise.resolve(cacheData));
        case 6:
          return _context2.abrupt("return", cacheData);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function verifyCache(_x5) {
    return _ref2.apply(this, arguments);
  };
}();
exports.verifyCache = verifyCache;
var getLocalisationkey = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(prefix, key, isCategoryRequired, isMainTypeRequired, isSubTypeRequired) {
    var delimiter,
      keyArray,
      localisedLabels,
      isArray,
      _args3 = arguments;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          delimiter = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : " / ";
          keyArray = [];
          localisedLabels = [];
          isArray = false;
          if (!(key == null)) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", key);
        case 8:
          if (typeof key == "string" || typeof key == "number") {
            keyArray.push(key);
          } else {
            keyArray = key;
            isArray = true;
          }
        case 9:
          keyArray.map(function (item) {
            var codeFromKey = "";

            // append main category in the beginning
            if (isCategoryRequired) {
              codeFromKey = getLocalisationLabel(item.split(".")[0], prefix);
            }
            if (isMainTypeRequired) {
              if (isCategoryRequired) codeFromKey = "".concat(codeFromKey).concat(delimiter);
              codeFromKey = getLocalisationLabel(item.split(".")[1], prefix);
            }
            if (isSubTypeRequired) {
              if (isMainTypeRequired || isCategoryRequired) codeFromKey = "".concat(codeFromKey).concat(delimiter);
              codeFromKey = "".concat(codeFromKey).concat(getLocalisationLabel(item, prefix));
            }
            if (!isCategoryRequired && !isMainTypeRequired && !isSubTypeRequired) {
              codeFromKey = getLocalisationLabel(item, prefix);
            }
            localisedLabels.push(codeFromKey === "" ? item : codeFromKey);
          });
          if (!isArray) {
            _context3.next = 12;
            break;
          }
          return _context3.abrupt("return", localisedLabels);
        case 12:
          return _context3.abrupt("return", localisedLabels[0]);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getLocalisationkey(_x6, _x7, _x8, _x9, _x10) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getLocalisationkey = getLocalisationkey;
var getLocalisationLabel = function getLocalisationLabel(key, prefix) {
  if (prefix != undefined && prefix != "") {
    key = "".concat(prefix, "_").concat(key);
  }
  key = getTransformedLocale(key);
  return key;
};
var getDateInRequiredFormat = function getDateInRequiredFormat(et) {
  var dateformat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "DD/MM/YYYY";
  if (!et) return "NA";
  // var date = new Date(Math.round(Number(et)));
  return moment(et).tz(datetimezone).format(dateformat);
};

/**
 *
 * @param {*} value - values to be checked
 * @param {*} defaultValue - default value
 * @param {*} path  - jsonpath from where the value was fetched
 */
exports.getDateInRequiredFormat = getDateInRequiredFormat;
var getValue = function getValue(value, defaultValue, path) {
  if (value == undefined || value == null || value.length === 0 || value.length === 1 && (value[0] === null || value[0] === "")) {
    // logger.error(`no value found for path: ${path}`);
    return defaultValue;
  } else return value;
};
exports.getValue = getValue;
var convertFooterStringtoFunctionIfExist = function convertFooterStringtoFunctionIfExist(footer) {
  if (footer != undefined) {
    footer = Function("'use strict'; return (".concat(footer, ")"))();
  }
  return footer;
};
exports.convertFooterStringtoFunctionIfExist = convertFooterStringtoFunctionIfExist;
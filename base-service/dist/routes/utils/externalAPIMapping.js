"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.externalAPIMapping = void 0;
var _get = _interopRequireDefault(require("lodash/get"));
var _axios = _interopRequireDefault(require("axios"));
var _commons = require("./commons");
var _logger = require("../../logger");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/**
 *
 * @param {*} key -name of the key used to identify module configs. Provided request URL
 * @param {*} req -current module object, picked from request body
 * @param {*} dataconfig - data config
 * @param {*} variableTovalueMap -map used for filling values by template engine 'mustache'
 * @param {*} localisationMap -Map to store localisation key, value pair
 * @param {*} requestInfo -request info from request body
 */

function escapeRegex(string) {
  if (typeof string == "string") return string.replace(/[\\"]/g, '\\$&');else return string;
}
var externalAPIMapping = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pdfKey, req, dataconfig, variableTovalueMap, requestInfo, unregisteredLocalisationCodes) {
    var jp, objectOfExternalAPI, externalAPIArray, localisationCodes, localisationModules, variableToModuleMap, responses, responsePromises, i, temp1, temp2, flag, j, temp3, _j, headers, resPromise, _i, res, _j2, replaceValue, loc, imageData, len, myDate, arrayOfOwnerObject, _externalAPIArray$_i$, _externalAPIArray$_i$2, format, _externalAPIArray$_i$3, value, variable, _format$scema, scema, val, l, ownerObject, k, fieldValue, _myDate, _replaceValue, _loc, currentValue, _currentValue, _currentValue2, _currentValue3, localisationMap;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          jp = require("jsonpath");
          objectOfExternalAPI = (0, _commons.getValue)(jp.query(dataconfig, "$.DataConfigs.mappings.*.mappings.*.externalAPI.*"), [], "$.DataConfigs.mappings.*.mappings.*.externalAPI.*");
          console.log(objectOfExternalAPI, 'objectOfExternalAPI');
          externalAPIArray = objectOfExternalAPI.map(function (item) {
            return {
              uri: item.path,
              queryParams: item.queryParam,
              jPath: item.responseMapping,
              requesttype: item.requesttype || "POST",
              variable: "",
              val: ""
            };
          });
          localisationCodes = [];
          localisationModules = [];
          variableToModuleMap = {};
          responses = [];
          responsePromises = [];
          for (i = 0; i < externalAPIArray.length; i++) {
            temp1 = "";
            temp2 = "";
            flag = 0; //to convert queryparam and uri into properURI
            //for PT module
            if (pdfKey == "pt-receipt") {
              for (j = 0; j < externalAPIArray[i].queryParams.length; j++) {
                if (externalAPIArray[i].queryParams[j] == "$") {
                  flag = 1;
                }
                if (externalAPIArray[i].queryParams[j] == "," || externalAPIArray[i].queryParams[j] == ":") {
                  if (flag == 1) {
                    temp2 = temp1;
                    temp3 = (0, _commons.getValue)(jp.query(req, temp1), "NA", temp1);
                    externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace(temp2, temp3);
                    j = 0;
                    flag = 0;
                    temp1 = "";
                    temp2 = "";
                  }
                }
                if (flag == 1) {
                  temp1 += externalAPIArray[i].queryParams[j];
                }
                if (j == externalAPIArray[i].queryParams.length - 1 && flag == 1) {
                  temp2 = temp1;
                  temp3 = (0, _commons.getValue)(jp.query(req, temp1), "NA", temp1);
                  externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace(temp2, temp3);
                  flag = 0;
                  temp1 = "";
                  temp2 = "";
                }
              }
            }
            //for other modules
            else {
              for (_j = 0; _j < externalAPIArray[i].queryParams.length; _j++) {
                if (externalAPIArray[i].queryParams[_j] == "{") {
                  externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace("{", "");
                }
                if (externalAPIArray[i].queryParams[_j] == "$") {
                  flag = 1;
                }
                if (externalAPIArray[i].queryParams[_j] == "," || externalAPIArray[i].queryParams[_j] == "}") {
                  if (flag == 1) {
                    temp2 = temp1;
                    temp3 = (0, _commons.getValue)(jp.query(req, temp1), "NA", temp1);
                    externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace(temp2, temp3);
                    _j = 0;
                    flag = 0;
                    temp1 = "";
                    temp2 = "";
                  }
                  if (externalAPIArray[i].queryParams[_j] == "}") {
                    externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace("}", "");
                  }
                }
                if (flag == 1) {
                  temp1 += externalAPIArray[i].queryParams[_j];
                }
                if (_j == externalAPIArray[i].queryParams.length - 1 && flag == 1) {
                  temp2 = temp1;
                  temp3 = (0, _commons.getValue)(jp.query(req, temp1), "NA", temp1);
                  externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace(temp2, temp3);
                  flag = 0;
                  temp1 = "";
                  temp2 = "";
                }
              }
            }
            externalAPIArray[i].queryParams = externalAPIArray[i].queryParams.replace(/,/g, "&");
            headers = {
              "content-type": "application/json;charset=UTF-8",
              accept: "application/json, text/plain, */*"
            };
            if (externalAPIArray[i].requesttype == "POST") {
              resPromise = _axios["default"].post(externalAPIArray[i].uri + "?" + externalAPIArray[i].queryParams, {
                RequestInfo: requestInfo
              }, {
                headers: headers
              });
            } else {
              resPromise = _axios["default"].get(externalAPIArray[i].uri + "?" + externalAPIArray[i].queryParams, {
                responseType: "application/json"
              });
            }
            responsePromises.push(resPromise);
          }
          _context.next = 12;
          return Promise.all(responsePromises);
        case 12:
          responses = _context.sent;
          _i = 0;
        case 14:
          if (!(_i < externalAPIArray.length)) {
            _context.next = 103;
            break;
          }
          res = responses[_i].data;
          console.log(res, 'responses');

          //putting required data from external API call in format config
          _j2 = 0;
        case 18:
          if (!(_j2 < externalAPIArray[_i].jPath.length)) {
            _context.next = 100;
            break;
          }
          replaceValue = (0, _commons.getValue)(jp.query(res, externalAPIArray[_i].jPath[_j2].value), "NA", externalAPIArray[_i].jPath[_j2].value);
          loc = externalAPIArray[_i].jPath[_j2].localisation || {};
          console.log(externalAPIArray[_i].jPath[_j2].type, 'externalAPIArray[i].jPath[j].type');
          if (!(externalAPIArray[_i].jPath[_j2].type == "image")) {
            _context.next = 37;
            break;
          }
          // default empty image
          imageData = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=";
          if (!(replaceValue != "NA")) {
            _context.next = 34;
            break;
          }
          _context.prev = 25;
          console.log(replaceValue, 'replaceValue');
          len = replaceValue[0].split(",").length; // var response = await axios.get(
          //   replaceValue[0].split(",")[len - 1], {
          //     responseType: "arraybuffer"
          //   }
          // );
          // imageData =
          //   "data:" +
          //   response.headers["content-type"] +
          //   ";base64," +
          //   Buffer.from(response.data).toString("base64");
          _context.next = 34;
          break;
        case 30:
          _context.prev = 30;
          _context.t0 = _context["catch"](25);
          _logger.logger.error(_context.t0.stack || _context.t0);
          throw {
            message: "error while loading image from: ".concat(replaceValue[0])
          };
        case 34:
          variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable] = imageData;
          _context.next = 97;
          break;
        case 37:
          if (!(externalAPIArray[_i].jPath[_j2].type == "date")) {
            _context.next = 42;
            break;
          }
          myDate = new Date(replaceValue[0]);
          if (isNaN(myDate) || replaceValue[0] === 0) {
            variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable] = "NA";
          } else {
            replaceValue = (0, _commons.getDateInRequiredFormat)(replaceValue[0], externalAPIArray[_i].jPath[_j2].format);
            variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable] = replaceValue;
          }
          _context.next = 97;
          break;
        case 42:
          if (!(externalAPIArray[_i].jPath[_j2].type == "array")) {
            _context.next = 81;
            break;
          }
          arrayOfOwnerObject = []; // let ownerObject = JSON.parse(JSON.stringify(get(formatconfig, directArr[i].jPath + "[0]", [])));
          _externalAPIArray$_i$ = externalAPIArray[_i].jPath[_j2], _externalAPIArray$_i$2 = _externalAPIArray$_i$.format, format = _externalAPIArray$_i$2 === void 0 ? {} : _externalAPIArray$_i$2, _externalAPIArray$_i$3 = _externalAPIArray$_i$.value, value = _externalAPIArray$_i$3 === void 0 ? [] : _externalAPIArray$_i$3, variable = _externalAPIArray$_i$.variable;
          _format$scema = format.scema, scema = _format$scema === void 0 ? [] : _format$scema;
          val = (0, _commons.getValue)(jp.query(res, value), "NA", value); //taking values about owner from request body
          l = 0;
        case 48:
          if (!(l < val.length)) {
            _context.next = 78;
            break;
          }
          // var x = 1;
          ownerObject = {};
          k = 0;
        case 51:
          if (!(k < scema.length)) {
            _context.next = 74;
            break;
          }
          fieldValue = (0, _get["default"])(val[l], scema[k].value, "NA");
          fieldValue = fieldValue == null ? "NA" : fieldValue;
          if (!(scema[k].type == "date")) {
            _context.next = 59;
            break;
          }
          _myDate = new Date(fieldValue);
          if (isNaN(_myDate) || fieldValue === 0) {
            ownerObject[scema[k].variable] = "NA";
          } else {
            _replaceValue = (0, _commons.getDateInRequiredFormat)(fieldValue, scema[k].format); // set(formatconfig,externalAPIArray[i].jPath[j].variable,replaceValue);
            ownerObject[scema[k].variable] = _replaceValue;
          }
          _context.next = 71;
          break;
        case 59:
          if (!(fieldValue !== "NA" && scema[k].localisation && scema[k].localisation.required)) {
            _context.next = 67;
            break;
          }
          _loc = scema[k].localisation || {};
          _context.next = 63;
          return (0, _commons.getLocalisationkey)(_loc && _loc.prefix, fieldValue, _loc.isCategoryRequired, _loc.isMainTypeRequired, _loc.isSubTypeRequired, _loc.delimiter);
        case 63:
          fieldValue = _context.sent;
          if (!localisationCodes.includes(fieldValue)) localisationCodes.push(fieldValue);
          if (!localisationModules.includes(_loc.module)) localisationModules.push(_loc.module);
          variableToModuleMap[scema[k].variable] = _loc.module;
        case 67:
          //console.log("\nvalue-->"+fieldValue)
          currentValue = fieldValue;
          if (_typeof(currentValue) == "object" && currentValue.length > 0) currentValue = currentValue[0];
          currentValue = escapeRegex(currentValue);
          ownerObject[scema[k].variable] = currentValue;
        case 71:
          k++;
          _context.next = 51;
          break;
        case 74:
          arrayOfOwnerObject.push(ownerObject);
        case 75:
          l++;
          _context.next = 48;
          break;
        case 78:
          variableTovalueMap[variable] = arrayOfOwnerObject;
          //console.log("\nvariableTovalueMap[externalAPIArray[i].jPath.variable]--->\n"+JSON.stringify(variableTovalueMap[externalAPIArray[i].jPath.variable]));
          _context.next = 97;
          break;
        case 81:
          if (!(replaceValue !== "NA" && externalAPIArray[_i].jPath[_j2].localisation && externalAPIArray[_i].jPath[_j2].localisation.required && externalAPIArray[_i].jPath[_j2].localisation.prefix)) {
            _context.next = 92;
            break;
          }
          _context.next = 84;
          return (0, _commons.getLocalisationkey)(loc && loc.prefix, replaceValue, loc.isCategoryRequired, loc.isMainTypeRequired, loc.isSubTypeRequired, loc.delimiter);
        case 84:
          _currentValue = _context.sent;
          if (_typeof(_currentValue) == "object" && _currentValue.length > 0) _currentValue = _currentValue[0];

          //currentValue = escapeRegex(currentValue);
          if (!localisationCodes.includes(_currentValue)) localisationCodes.push(_currentValue);
          if (!localisationModules.includes(loc.module)) localisationModules.push(loc.module);
          variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable] = _currentValue;
          variableToModuleMap[externalAPIArray[_i].jPath[_j2].variable] = loc.module;
          _context.next = 96;
          break;
        case 92:
          _currentValue2 = replaceValue;
          if (_typeof(_currentValue2) == "object" && _currentValue2.length > 0) _currentValue2 = _currentValue2[0];

          // currentValue=currentValue.replace(/\\/g,"\\\\").replace(/"/g,'\\"');
          _currentValue2 = escapeRegex(_currentValue2);
          variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable] = _currentValue2;
        case 96:
          if (externalAPIArray[_i].jPath[_j2].isUpperCaseRequired) {
            _currentValue3 = variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable];
            if (_typeof(_currentValue3) == "object" && _currentValue3.length > 0) _currentValue3 = _currentValue3[0];
            variableTovalueMap[externalAPIArray[_i].jPath[_j2].variable] = _currentValue3.toUpperCase();
          }
        case 97:
          _j2++;
          _context.next = 18;
          break;
        case 100:
          _i++;
          _context.next = 14;
          break;
        case 103:
          localisationMap = [];
          _context.prev = 104;
          _context.next = 111;
          break;
        case 107:
          _context.prev = 107;
          _context.t1 = _context["catch"](104);
          _logger.logger.error(_context.t1.stack || _context.t1);
          throw {
            message: "Error in localisation service call: ".concat(_context.t1.Errors[0].message)
          };
        case 111:
          Object.keys(variableTovalueMap).forEach(function (key) {
            if (variableToModuleMap[key] && typeof variableTovalueMap[key] == 'string') {
              var code = variableTovalueMap[key];
              var module = variableToModuleMap[key];
              if (localisationMap[code + "_" + module]) {
                variableTovalueMap[key] = localisationMap[code + "_" + module];
                if (unregisteredLocalisationCodes.includes(code)) {
                  var index = unregisteredLocalisationCodes.indexOf(code);
                  unregisteredLocalisationCodes.splice(index, 1);
                }
              } else {
                if (!unregisteredLocalisationCodes.includes(code)) unregisteredLocalisationCodes.push(code);
              }
            }
            if (_typeof(variableTovalueMap[key]) == 'object') {
              Object.keys(variableTovalueMap[key]).forEach(function (objectKey) {
                Object.keys(variableTovalueMap[key][objectKey]).forEach(function (objectItemkey) {
                  if (variableToModuleMap[objectItemkey]) {
                    var module = variableToModuleMap[objectItemkey];
                    var code = variableTovalueMap[key][objectKey][objectItemkey];
                    if (localisationMap[code + "_" + module]) {
                      variableTovalueMap[key][objectKey][objectItemkey] = localisationMap[code + "_" + module];
                      if (unregisteredLocalisationCodes.includes(code)) {
                        var index = unregisteredLocalisationCodes.indexOf(code);
                        unregisteredLocalisationCodes.splice(index, 1);
                      }
                    } else {
                      if (!unregisteredLocalisationCodes.includes(code)) unregisteredLocalisationCodes.push(code);
                    }
                  }
                });
              });
            }
          });
        case 112:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[25, 30], [104, 107]]);
  }));
  return function externalAPIMapping(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
exports.externalAPIMapping = externalAPIMapping;
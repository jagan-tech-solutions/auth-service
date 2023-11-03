"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directMapping = void 0;
var _get = _interopRequireDefault(require("lodash/get"));
var _logger = require("../../logger");
var _axios = _interopRequireDefault(require("axios"));
var _EnvironmentVariables = _interopRequireDefault(require("./EnvironmentVariables"));
var _commons = require("./commons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var jp = require("jsonpath");
var externalHost = _EnvironmentVariables["default"].EGOV_EXTERNAL_HOST;
/**
 *
 * @param {*} req - current module object, picked from request body
 * @param {*} dataconfig  - data config
 * @param {*} variableTovalueMap - map used for filling values by template engine 'mustache'
 * @param {*} localisationMap - Map to store localisation key, value pair
 * @param {*} requestInfo - request info from request body
 */

function escapeRegex(string) {
  if (typeof string == "string") return string.replace(/[\\"]/g, '\\$&');else return string;
}
var directMapping = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, dataconfig, variableTovalueMap, requestInfo, unregisteredLocalisationCodes, pdfKey) {
    var directArr, localisationCodes, localisationModules, variableToModuleMap, objectOfDirectMapping, i, fun, response, arrayOfOwnerObject, _directArr$i, _directArr$i$format, format, _directArr$i$val, val, variable, _format$scema, scema, j, ownerObject, k, fieldValue, myDate, replaceValue, loc, currentValue, arrayOfBuiltUpDetails, isOrderedList, _directArr$i2, _directArr$i2$format, _format, _directArr$i2$val, _val, _variable, _format$scema2, _scema, _j, arrayOfItems, _k, _fieldValue, _myDate, _replaceValue, p, orderedList, _loc, stringBuildpDetails, code, _myDate2, _replaceValue2, _code, _currentValue, _currentValue2, localisationMap, resposnseMap;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          directArr = [];
          localisationCodes = [];
          localisationModules = [];
          variableToModuleMap = {}; // using jp-jsonpath because loadash can not handele '*'
          console.log('directMapping');
          objectOfDirectMapping = jp.query(dataconfig, "$.DataConfigs.mappings.*.mappings.*.direct.*");
          objectOfDirectMapping = (0, _commons.getValue)(objectOfDirectMapping, [], "$.DataConfigs.mappings.*.mappings.*.direct.*");
          directArr = objectOfDirectMapping.map(function (item) {
            return {
              jPath: item.variable,
              val: item.value && (0, _commons.getValue)(jp.query(req, item.value.path), "NA", item.value.path),
              valJsonPath: item.value && item.value.path,
              type: item.type,
              url: item.url,
              format: item.format,
              localisation: item.localisation,
              uCaseNeeded: item.isUpperCaseRequired
            };
          });
          console.log(directArr, 'directArr');
          i = 0;
        case 10:
          if (!(i < directArr.length)) {
            _context.next = 158;
            break;
          }
          //for array type direct mapping
          if (directArr[i].type == "citizen-employee-title") {
            if ((0, _get["default"])(requestInfo, "userInfo.type", "NA").toUpperCase() == "EMPLOYEE") {
              variableTovalueMap[directArr[i].jPath] = "Employee Copy";
            } else {
              variableTovalueMap[directArr[i].jPath] = "Citizen Copy";
            }
          }
          if (!(directArr[i].type == "selectFromRequestInfo")) {
            _context.next = 18;
            break;
          }
          directArr[i].val = (0, _commons.getValue)(jp.query(requestInfo, directArr[i].valJsonPath), "NA", directArr[i].valJsonPath);
          if (_typeof(directArr[i].val) == "object" && directArr[i].val.length > 0) directArr[i].val = directArr[i].val[0];
          variableTovalueMap[directArr[i].jPath] = directArr[i].val;
          _context.next = 155;
          break;
        case 18:
          if (!(directArr[i].type == "external_host")) {
            _context.next = 22;
            break;
          }
          variableTovalueMap[directArr[i].jPath] = externalHost;
          _context.next = 155;
          break;
        case 22:
          if (!(directArr[i].type == "function")) {
            _context.next = 27;
            break;
          }
          fun = Function("type", directArr[i].format);
          variableTovalueMap[directArr[i].jPath] = fun(directArr[i].val[0]);
          _context.next = 155;
          break;
        case 27:
          if (!(directArr[i].type == "image")) {
            _context.next = 42;
            break;
          }
          _context.prev = 28;
          console.log(directArr[i].url, 'directArr[i].url');
          _context.next = 32;
          return _axios["default"].get(directArr[i].url, {
            responseType: "arraybuffer"
          });
        case 32:
          response = _context.sent;
          variableTovalueMap[directArr[i].jPath] = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(response.data).toString("base64");
          //  logger.info("loaded image: "+directArr[i].url);
          _context.next = 40;
          break;
        case 36:
          _context.prev = 36;
          _context.t0 = _context["catch"](28);
          _logger.logger.error(_context.t0.stack || _context.t0);
          throw {
            message: "error while loading image from: ".concat(directArr[i].url)
          };
        case 40:
          _context.next = 155;
          break;
        case 42:
          if (!(directArr[i].type == "array")) {
            _context.next = 81;
            break;
          }
          arrayOfOwnerObject = []; // let ownerObject = JSON.parse(JSON.stringify(get(formatconfig, directArr[i].jPath + "[0]", [])));
          _directArr$i = directArr[i], _directArr$i$format = _directArr$i.format, format = _directArr$i$format === void 0 ? {} : _directArr$i$format, _directArr$i$val = _directArr$i.val, val = _directArr$i$val === void 0 ? [] : _directArr$i$val, variable = _directArr$i.variable;
          _format$scema = format.scema, scema = _format$scema === void 0 ? [] : _format$scema; //taking values about owner from request body
          j = 0;
        case 47:
          if (!(j < val.length)) {
            _context.next = 78;
            break;
          }
          // var x = 1;
          ownerObject = {};
          k = 0;
        case 50:
          if (!(k < scema.length)) {
            _context.next = 74;
            break;
          }
          fieldValue = (0, _get["default"])(val[j], scema[k].value, "NA");
          fieldValue = fieldValue == null ? "NA" : fieldValue;
          if (!(scema[k].type == "date")) {
            _context.next = 58;
            break;
          }
          myDate = new Date(fieldValue);
          if (isNaN(myDate) || fieldValue === 0) {
            ownerObject[scema[k].variable] = "NA";
          } else {
            replaceValue = (0, _commons.getDateInRequiredFormat)(fieldValue, scema[k].format); // set(formatconfig,externalAPIArray[i].jPath[j].variable,replaceValue);
            ownerObject[scema[k].variable] = replaceValue;
          }
          _context.next = 71;
          break;
        case 58:
          if (!(fieldValue !== "NA" && scema[k].localisation && scema[k].localisation.required)) {
            _context.next = 67;
            break;
          }
          loc = scema[k].localisation || {};
          console.log(fieldValue, 'fieldValue');
          _context.next = 63;
          return (0, _commons.getLocalisationkey)(loc && loc.prefix, fieldValue, loc.isCategoryRequired, loc.isMainTypeRequired, loc.isSubTypeRequired, loc.delimiter);
        case 63:
          fieldValue = _context.sent;
          if (!localisationCodes.includes(fieldValue)) localisationCodes.push(fieldValue);
          if (!localisationModules.includes(loc.module)) localisationModules.push(loc.module);
          variableToModuleMap[scema[k].variable] = loc.module;
        case 67:
          currentValue = fieldValue;
          if (_typeof(currentValue) == "object" && currentValue.length > 0) currentValue = currentValue[0];
          currentValue = escapeRegex(currentValue);
          ownerObject[scema[k].variable] = currentValue;
        case 71:
          k++;
          _context.next = 50;
          break;
        case 74:
          arrayOfOwnerObject.push(ownerObject);
        case 75:
          j++;
          _context.next = 47;
          break;
        case 78:
          // set(formatconfig, directArr[i].jPath, arrayOfOwnerObject);
          variableTovalueMap[directArr[i].jPath] = arrayOfOwnerObject;
          _context.next = 155;
          break;
        case 81:
          if (!(directArr[i].type == "array-column")) {
            _context.next = 123;
            break;
          }
          arrayOfBuiltUpDetails = [];
          isOrderedList = false; // let arrayOfFields=get(formatconfig, directArr[i].jPath+"[0]",[]);
          // arrayOfBuiltUpDetails.push(arrayOfFields);
          _directArr$i2 = directArr[i], _directArr$i2$format = _directArr$i2.format, _format = _directArr$i2$format === void 0 ? {} : _directArr$i2$format, _directArr$i2$val = _directArr$i2.val, _val = _directArr$i2$val === void 0 ? [] : _directArr$i2$val, _variable = _directArr$i2.variable;
          _format$scema2 = _format.scema, _scema = _format$scema2 === void 0 ? [] : _format$scema2; //to get data of multiple floor Built up details
          _j = 0;
        case 87:
          if (!(_j < _val.length)) {
            _context.next = 118;
            break;
          }
          arrayOfItems = [];
          _k = 0;
        case 90:
          if (!(_k < _scema.length)) {
            _context.next = 114;
            break;
          }
          _fieldValue = (0, _get["default"])(_val[_j], _scema[_k].value, "NA");
          _fieldValue = _fieldValue == null ? "NA" : _fieldValue;
          if (!(_scema[_k].type == "date")) {
            _context.next = 98;
            break;
          }
          _myDate = new Date(_fieldValue);
          if (isNaN(_myDate) || _fieldValue === 0) {
            arrayOfItems.push("NA");
          } else {
            _replaceValue = (0, _commons.getDateInRequiredFormat)(_fieldValue, _scema[_k].format); // set(formatconfig,externalAPIArray[i].jPath[j].variable,replaceValue);
            arrayOfItems.push(_replaceValue);
          }
          _context.next = 111;
          break;
        case 98:
          if (!(_scema[_k].type == "array-orderedlist" && Array.isArray(_fieldValue))) {
            _context.next = 102;
            break;
          }
          if (_fieldValue !== "NA") {
            for (p = 0; p < _fieldValue.length; p++) {
              orderedList = [];
              orderedList.push(_fieldValue[p]);
              arrayOfBuiltUpDetails.push(orderedList);
            }
            isOrderedList = true;
          }
          _context.next = 111;
          break;
        case 102:
          if (!(_fieldValue !== "NA" && _scema[_k].localisation && _scema[_k].localisation.required)) {
            _context.next = 110;
            break;
          }
          _loc = _scema[_k].localisation || {};
          console.log(_fieldValue, 'getLocalisationkey');
          _context.next = 107;
          return (0, _commons.getLocalisationkey)(_loc && _loc.prefix, _fieldValue, _loc.isCategoryRequired, _loc.isMainTypeRequired, _loc.isSubTypeRequired, _loc.delimiter);
        case 107:
          _fieldValue = _context.sent;
          if (!localisationCodes.includes(_fieldValue)) localisationCodes.push(_fieldValue);
          if (!localisationModules.includes(_loc.module)) localisationModules.push(_loc.module);
        case 110:
          arrayOfItems.push(_fieldValue);
        case 111:
          _k++;
          _context.next = 90;
          break;
        case 114:
          if (isOrderedList === false) arrayOfBuiltUpDetails.push(arrayOfItems);
        case 115:
          _j++;
          _context.next = 87;
          break;
        case 118:
          // remove enclosing [ &  ]
          stringBuildpDetails = JSON.stringify(arrayOfBuiltUpDetails).replace("[", "");
          stringBuildpDetails = stringBuildpDetails.substring(0, stringBuildpDetails.length - 1);
          variableTovalueMap[directArr[i].jPath] = stringBuildpDetails;
          // set(formatconfig,directArr[i].jPath,arrayOfBuiltUpDetails);
          _context.next = 155;
          break;
        case 123:
          if (!(directArr[i].type == "label")) {
            _context.next = 133;
            break;
          }
          _context.next = 126;
          return (0, _commons.getLocalisationkey)(directArr[i].localisation && directArr[i].localisation.prefix, directArr[i].valJsonPath, directArr[i].localisation.isCategoryRequired, directArr[i].localisation.isMainTypeRequired, directArr[i].localisation.isSubTypeRequired, directArr[i].localisation.delimiter);
        case 126:
          code = _context.sent;
          if (!localisationCodes.includes(code)) localisationCodes.push(code);
          if (!localisationModules.includes(directArr[i].localisation.module)) localisationModules.push(directArr[i].localisation.module);
          variableTovalueMap[directArr[i].jPath] = code;
          variableToModuleMap[directArr[i].jPath] = directArr[i].localisation.module;
          _context.next = 155;
          break;
        case 133:
          if (!(directArr[i].type == "date")) {
            _context.next = 138;
            break;
          }
          _myDate2 = new Date(directArr[i].val[0]);
          if (isNaN(_myDate2) || directArr[i].val[0] === 0) {
            variableTovalueMap[directArr[i].jPath] = "NA";
          } else {
            _replaceValue2 = (0, _commons.getDateInRequiredFormat)(directArr[i].val[0], directArr[i].format);
            variableTovalueMap[directArr[i].jPath] = _replaceValue2;
          }
          _context.next = 155;
          break;
        case 138:
          directArr[i].val = (0, _commons.getValue)(directArr[i].val, "NA", directArr[i].valJsonPath);
          if (!(directArr[i].val !== "NA" && directArr[i].localisation && directArr[i].localisation.required)) {
            _context.next = 150;
            break;
          }
          _context.next = 142;
          return (0, _commons.getLocalisationkey)(directArr[i].localisation && directArr[i].localisation.prefix, directArr[i].val, directArr[i].localisation.isCategoryRequired, directArr[i].localisation.isMainTypeRequired, directArr[i].localisation.isSubTypeRequired, directArr[i].localisation.delimiter);
        case 142:
          _code = _context.sent;
          if (_typeof(_code) == "object" && _code.length > 0) _code = _code[0];
          if (!localisationCodes.includes(_code)) localisationCodes.push(_code);
          if (!localisationModules.includes(directArr[i].localisation.module)) localisationModules.push(directArr[i].localisation.module);
          variableTovalueMap[directArr[i].jPath] = _code;
          variableToModuleMap[directArr[i].jPath] = directArr[i].localisation.module;
          _context.next = 154;
          break;
        case 150:
          _currentValue = directArr[i].val;
          if (_typeof(_currentValue) == "object" && _currentValue.length > 0) _currentValue = _currentValue[0];

          // currentValue=currentValue.replace(/\\/g,"\\\\").replace(/"/g,'\\"');
          _currentValue = escapeRegex(_currentValue);
          variableTovalueMap[directArr[i].jPath] = _currentValue;
        case 154:
          if (directArr[i].uCaseNeeded) {
            _currentValue2 = variableTovalueMap[directArr[i].jPath];
            if (_typeof(_currentValue2) == "object" && _currentValue2.length > 0) _currentValue2 = _currentValue2[0];
            variableTovalueMap[directArr[i].jPath] = _currentValue2.toUpperCase();
          }
        case 155:
          i++;
          _context.next = 10;
          break;
        case 158:
          localisationMap = [];
          _context.prev = 159;
          _context.next = 162;
          return (0, _commons.findLocalisation)(requestInfo, localisationModules, localisationCodes, pdfKey + '-directMapping');
        case 162:
          resposnseMap = _context.sent;
          resposnseMap.messages.map(function (item) {
            localisationMap[item.code + "_" + item.module] = item.message;
          });
          _context.next = 170;
          break;
        case 166:
          _context.prev = 166;
          _context.t1 = _context["catch"](159);
          _logger.logger.error(_context.t1.stack || _context.t1);
          throw {
            message: "Error in localisation service call: ".concat(_context.t1.Errors[0].message)
          };
        case 170:
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
        case 171:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[28, 36], [159, 166]]);
  }));
  return function directMapping(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();
exports.directMapping = directMapping;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = exports.initialiseTables = void 0;
var _config = _interopRequireDefault(require("../config"));
var _logger = require("../logger");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _require = require("pg"),
  Client = _require.Client;
var fs = require("fs");
var _require2 = require("pg"),
  Pool = _require2.Pool;
var connectionObject = {
  user: _config["default"].DB_USER,
  host: _config["default"].DB_HOST,
  database: _config["default"].DB_NAME,
  password: _config["default"].DB_PASSWORD,
  port: _config["default"].DB_PORT,
  ssl: true // Enable SSL
};

var client = new Client(connectionObject);
var initialiseTables = function initialiseTables() {
  client.connect().then(function () {
    var sqlScript = fs.readFileSync("src/server/database/USERv1.sql", "utf8");
    return client.query(sqlScript);
  }).then(function () {
    _logger.logger.info("DDL script executed successfully.");
  })["catch"](function (err) {
    _logger.logger.error("Error executing DDL script:", err);
  })["finally"](function () {
    client.end();
  });
};
exports.initialiseTables = initialiseTables;
var pool = new Pool(connectionObject);

// Expose method, log query, initiate trace etc at single point later on.
var query = function query(text, params) {
  return pool.query(text, params);
};
exports.query = query;
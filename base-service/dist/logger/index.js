"use strict";

var _require = require("winston"),
  createLogger = _require.createLogger,
  format = _require.format,
  transports = _require.transports;
var myFormat = format.printf(function (_ref) {
  var level = _ref.level,
    message = _ref.message,
    label = _ref.label,
    timestamp = _ref.timestamp;
  return "".concat(timestamp, " [").concat(label, "] [").concat(level, "]: ").concat(message);
});
var logger = createLogger({
  format: format.combine(format.label({
    label: 'BFF'
  }), format.timestamp({
    format: " YYYY-MM-DD HH:mm:ss.SSSZZ "
  }), format.simple(), format.colorize(), myFormat),
  transports: [new transports.Console()]
});

//export default logger;
module.exports = {
  logger: logger
};
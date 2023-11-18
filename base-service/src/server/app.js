var createError = require("http-errors");
var express = require("express");
var path = require("path");
const requestMiddleware = require("./middlewares/validateRequestMiddleware");
const cacheMiddleware = require("./middlewares/cacheMiddleware");
const NodeCache = require("node-cache");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
var config = require("./config");
var musterRouter = require("./routes/muster");
var authRouter = require("./routes/auth");
var userRouter = require("./routes/userV1");
var mdmsRouter = require("./routes/mdmsV1");

var persisterRouter = require("./routes/persisterV1");
var searcherRouter = require("./routes/searcher");
var { listenConsumer } = require("./kafka/consumer");
const {
  getErrorResponse,
  invalidPathHandler,
  errorLogger,
  errorResponder,
  throwError,
} = require("./utils");
const { initialiseTables } = require("./database");
let dataConfigUrls = config.configs.DATA_CONFIG_URLS;
let formatConfigUrls = config.configs.DATA_CONFIG_URLS;

let dataConfigMap = {};
let formatConfigMap = {};
var app = express();
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
initialiseTables();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
/* Middleware to Validate Request info */
app.use(requestMiddleware);

/* Middleware to cache response */
app.use(cacheMiddleware);
app.use(config.app?.contextPath + "/muster", musterRouter);
app.use(config.app?.contextPath + "/auth", authRouter);
app.use(config.app?.contextPath + "/user/v1", userRouter);
app.use(config.app?.contextPath + "/persister/v1",persisterRouter );

app.use(config.app?.contextPath + "/mdms/v1", mdmsRouter);

app.use(config.app.contextPath + "/searcher", searcherRouter);

// Attach the first Error handling Middleware
// function defined above (which logs the error)
app.use(errorLogger);

// Attach the second Error handling Middleware
// function defined above (which sends back the response)
app.use(errorResponder);

// Attach the fallback Middleware
// function which sends back the response for invalid paths)
app.use(invalidPathHandler);

listenConsumer();
module.exports = app;

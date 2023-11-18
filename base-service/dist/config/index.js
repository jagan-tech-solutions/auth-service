"use strict";

var _host;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// config.js
// const env = process.env.NODE_ENV; // 'dev' or 'test'

var HOST = process.env.EGOV_HOST || "https://unified-dev.digit.org/";
if (!HOST) {
  console.log("You need to set the HOST variable");
  process.exit(1);
}
module.exports = {
  auth_token: process.env.AUTH_TOKEN,
  KAFKA_BROKER_HOST: process.env.KAFKA_BROKER_HOST || "kafka-v2.kafka-cluster:9092",
  KAFKA_RECEIVE_CREATE_JOB_TOPIC: process.env.KAFKA_RECEIVE_CREATE_JOB_TOPIC || "PDF_GEN_RECEIVE",
  KAFKA_BULK_PDF_TOPIC: process.env.KAFKA_BULK_PDF_TOPIC || "BULK_PDF_GEN",
  PDF_BATCH_SIZE: process.env.PDF_BATCH_SIZE || 40,
  DB_USER: process.env.DB_USER || "jktech_w86k_user",
  DB_PASSWORD: process.env.DB_PASSWORD || "ILJuVq8SX01zVChBNUSs75ykGf9FGdIs",
  DB_HOST: process.env.DB_HOST || "dpg-cl4doohnovjs73c30qo0-a.oregon-postgres.render.com",
  // DB_HOST: process.env.DB_HOST || "postgres://jktech_w86k_user:ILJuVq8SX01zVChBNUSs75ykGf9FGdIs@dpg-cl4doohnovjs73c30qo0-a.oregon-postgres.render.com/jktech_w86k",
  DB_NAME: process.env.DB_NAME || "jktech_w86k",
  DB_PORT: process.env.DB_PORT || 5432,
  app: {
    port: parseInt(process.env.APP_PORT) || 8080,
    host: HOST,
    git_token: "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",
    contextPath: process.env.CONTEXT_PATH || "/egov-bff-service"
  },
  //lowcode-apps/mdms
  git: {
    //  repoOwner :"lowcode-apps",
    "default": {
      repoOwner: "ejagankumar",
      repoName: "mdms",
      repoBranch: "master"
    },
    mdms: {
      repoOwner: "ejagankumar",
      repoName: "mdms",
      repoBranch: "master"
    }
  },
  configs: {
    DATA_CONFIG_URLS: 'file:///Users/klrao/Documents/pdf-config/data-config/consolidatedreceipt.json',
    FORMAT_CONFIG_URLS: process.env.FORMAT_CONFIG_URLS
  },
  host: (_host = {
    serverHost: HOST,
    mdms: process.env.EGOV_MDMS_HOST || HOST,
    pdf: process.env.EGOV_PDF_HOST || HOST,
    user: process.env.EGOV_USER_HOST || HOST,
    localization: process.env.EGOV_LOCALIZATION_HOST || HOST,
    workflow: process.env.EGOV_WORKFLOW_HOST || HOST
  }, _defineProperty(_host, "mdms", process.env.EGOV_MDMS_HOST || HOST || "http://localhost:8085/"), _defineProperty(_host, "pdf", process.env.EGOV_PDF_HOST || HOST || "http://localhost:8087/"), _defineProperty(_host, "user", process.env.EGOV_USER_HOST || HOST || "http://localhost:8089/"), _defineProperty(_host, "workflow", process.env.EGOV_WORKFLOW_HOST || HOST || "http://localhost:8091/"), _defineProperty(_host, "muster", process.env.WORKS_MUSTER_HOST || "http://localhost:8070/"), _defineProperty(_host, "individual", process.env.WORKS_INDIVIDUAL_HOST || "http://localhost:8071/"), _host),
  paths: {
    pdf_create: "/pdf-service/v1/_createnosave",
    user_search: "/user/_search",
    mdms_search: "/egov-mdms-service/v1/_search",
    workflow_search: "/egov-workflow-v2/egov-wf/process/_search",
    ind_search: "/individual/v1/_search",
    mus_search: "/muster-roll/v1/_search",
    localization_search: "/localization/messages/v1/_search"
  }
};
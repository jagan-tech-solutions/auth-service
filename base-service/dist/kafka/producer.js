"use strict";

var config = require("../config");
var kafka = require("kafka-node");
var logger = require("../logger").logger;
var Producer = kafka.Producer;
var client;
// if (process.env.NODE_ENV === "development") {
// client = new kafka.Client();
client = new kafka.KafkaClient({
  kafkaHost: config.KAFKA_BROKER_HOST,
  connectRetryOptions: {
    retries: 1
  }
});
//   console.log("local - ");
// } else {
//   client = new kafka.KafkaClient({ kafkaHost: envVariables.KAFKA_BROKER_HOST });
//   console.log("cloud - ");
// }

var producer = new Producer(client, {
  partitionerType: 2
});
producer.on("ready", function () {
  logger.info("Producer is ready");
});
producer.on("error", function (err) {
  logger.error("Producer is in error state");
  logger.error(err.stack || err);
});

//export default producer;
module.exports = {
  producer: producer
};
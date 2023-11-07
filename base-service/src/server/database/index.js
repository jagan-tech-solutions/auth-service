import config from "../config";
import { logger } from "../logger";

const { Client } = require("pg");
const fs = require("fs");
const { Pool } = require("pg");

const connectionObject = {
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
  ssl: true, // Enable SSL
};
const client = new Client(connectionObject);

export const initialiseTables = () => {
  client
    .connect()
    .then(() => {
      const sqlScript = fs.readFileSync(
        "src/server/database/USERv1.sql",
        "utf8"
      );
      return client.query(sqlScript);
    })
    .then(() => {
      logger.info("DDL script executed successfully.");
    })
    .catch((err) => {
      logger.error("Error executing DDL script:", err);
    })
    .finally(() => {
      client.end();
    });
};

const pool = new Pool(connectionObject);

// Expose method, log query, initiate trace etc at single point later on.
export const query = (text, params) => pool.query(text, params);

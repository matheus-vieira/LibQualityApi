import Sequelize from "sequelize";

import logger from "../utils/logging/logger.js";

const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const hostname = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;

logger.debug("database", database);
logger.debug("username", username);
logger.debug("password", password);
logger.debug("hostname", hostname);
logger.debug("dialect", dialect);

export default class Database {
  constructor() {
    this.model = null;
    this.createDb();
    this.defineModel();
  }

  defineModel() {
    throw new Error("You have to implement the method defineModel!");
  }

  createDb() {
    this.database = new Sequelize(
      database,
      username,
      password,
      {
        host: hostname,
        dialect: dialect,
        storage: process.env.DB_STORAGE_SQLITE,
        logging: logger.debug.bind(logger),
      }
    );
    logger.info("database created successfully at " + process.env.DB_STORAGE_SQLITE);
  }

  async isConnected() {
    try {
      return await this.database.authenticate();
    } catch (error) {
      logger.error("Unable to connect to the database:", error);
    }
  }

  async save(resource) {
    try {
      return await this.model.create(resource);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async saveList(list) {
    try {
      return await this.model.bulkCreate(list, { validate: true });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

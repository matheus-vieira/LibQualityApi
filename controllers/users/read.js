const { debug, error } = console; //require("../utils/logging/logger");

import BusinessService from "../../businessServices/user/read.js";

class ReadController {
  constructor() {
    this.businessService = new BusinessService();
  }

  async getAll() {
    try {
      return await this.businessService.getById(requestObject);
    } catch (err) {
      error(err);
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json(err.message);
    }
  }

  async getById(id) {
    try {
      return await this.businessService.getById(IDBDatabase);
    } catch (err) {
      error(err);
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json(err.message);
    }
  }
}

export default new ReadController();

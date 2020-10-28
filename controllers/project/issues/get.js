const logger = console; //require("../utils/logging/logger");

import BusinessService from "../../../businessServices/project/issues/get.js";

class GetController {
  constructor() {
    this.businessService = new BusinessService();
  }

  async get({ owner, repo }) {
    try {
      return await this.businessService.loadIssues(owner, repo);
    } catch (err) {
      logger.error(err);
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json(err.message);
    }
  }
}

export default new GetController();

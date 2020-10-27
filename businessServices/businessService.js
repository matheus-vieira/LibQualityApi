import logger from "../utils/logging/logger.js";

class ReadBusinessService {
  constructor() {
    this.repository = null;
  }

  async listAll() {
    try {
      return await this.repository.findAll();
    } catch (err) {
      err.statusCode = 500;
      logger.error(err);
      throw err;
    }
  }

  async getById(id) {
    try {
      return await this.repository.getById(id);
    } catch (err) {
      err.statusCode = 500;
      error(err);
      throw err;
    }
  }

  async getBy(where) {
    try {
      return await this.repository.getById({
        where: where,
      });
    } catch (err) {
      err.statusCode = 500;
      error(err);
      throw err;
    }
  }

  async create(resource) {
    try {
      this.repository.create(resource);
    } catch (err) {
      err.statusCode = 500;
      error(err);
      throw err;
    }
  }

  async update(resource) {
    try {
      this.repository.destroy(resource);
    } catch (err) {
      err.statusCode = 500;
      error(err);
      throw err;
    }
    this.repository.update(resource);
  }

  async remvoe(resource) {
    try {
      this.repository.destroy(resource);
    } catch (err) {
      err.statusCode = 500;
      error(err);
      throw err;
    }
  }
}

export default ReadBusinessService;

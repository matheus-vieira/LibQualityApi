import logger from '../../utils/logging/logger.js';
import Database from '../database.js';
import model from './model.js';

export default class UserRepository extends Database {
  defineModel() {
    this.model = model(this.database);
    this.database.sync();
  }

  async getByEmail(email) {
    try {
      return await this.getBy({ where: { email } });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

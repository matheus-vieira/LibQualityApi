import Sequelize from 'sequelize';
import Database from '../../database.js';
import model from './model.js';
import logger from '../../../utils/logging/logger.js';

export default class IssuesRepository extends Database {
  defineModel() {
    this.model = model(this.database);
    this.database.sync();
  }

  async getLastUpdateDate(owner, repo) {
    // issue_updated_at
    try {
      const query = `%/${owner}/${repo}%`;
      return await this.model.max('issue_updated_at', {
        where: { repository_url: { [Sequelize.Op.like]: query } },
      });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async getBy(owner, repo) {
    // issue_updated_at
    try {
      const query = `%${owner}/${repo}`;
      const list = await this.model.findAll({
        where: { repository_url: { [Sequelize.Op.like]: query } },
      });
      return list.map((i) => i.dataValues);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

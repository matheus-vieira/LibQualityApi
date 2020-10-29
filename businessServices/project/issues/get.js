import BusinessService from '../../businessService.js';
import IssuesRepository from '../../../repository/project/issue/repository.js';
import mapper from '../../../repository/project/issue/modelMapper.js';
import github from '../../../services/github.js';
import logger from '../../../utils/logging/logger.js';

class ReadBusinessService extends BusinessService {
  constructor() {
    super();

    this.repository = new IssuesRepository();
  }

  async loadIssues(owner, repo) {
    try {
      await this.requestIssues(owner, repo);

      return await this.repository.getBy(owner, repo);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async requestIssues(owner, repo) {
    try {
      const opt = {
        owner: owner,
        repo: repo,
      };

      const lastUpdateDate = await this.repository.getLastUpdateDate(owner, repo);

      if (lastUpdateDate) opt.since = lastUpdateDate;

      logger.info('requesting issues ' + JSON.stringify(opt));

      const repoIssues = await github.paginate(github.issues.listForRepo, opt);

      if (repoIssues && repoIssues.length > 0)
        await this.repository.saveList(repoIssues.map(mapper));
    } catch (err) {
      err.message = 'Github connection error' + err.message;
      console.error(err);
      logger.error(err);
      throw err;
    } finally {
      logger.info('requested issues');
    }
  }
}

export default ReadBusinessService;

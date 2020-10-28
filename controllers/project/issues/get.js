const logger = console; // from '../utils/logging/logger';

import BusinessService from '../../../businessServices/project/issues/get.js';

const calcAge = (issues) => {
  const sumAge = issues.reduce(reduceAge, 0);
  const avg = Math.ceil(sumAge / issues.length);
  const sumStd = issues.reduce((acc, i) => reduceStd(acc, i, avg), 0);

  const avgAge = sumStd / issues.length;
  const stdAge = Math.ceil(Math.sqrt(avgAge));

  return { avgAge, stdAge };
};
const reduceStd = (acc, i, avg) => acc + Math.pow(i.age - avg, 2);

const reduceAge = (acc, issue) => {
  const creationDate = new Date(issue.createdDate);
  const now = new Date(issue.closeDate || null);
  const diffTime = now.getTime() - creationDate.getTime();
  issue.age = Math.ceil(diffTime / (1000 * 3600 * 24));
  return acc + issue.age;
};

class GetController {
  constructor() {
    this.businessService = new BusinessService();
  }

  async get({ owner, repo }) {
    try {
      const issues = await this.businessService.loadIssues(owner, repo);

      const { avgAge, stdAge } = calcAge(issues);

      return {
        repoName: `${owner}/${repo}`,
        issues: issues.length,
        avgAge,
        stdAge,
      };
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

export default new GetController();

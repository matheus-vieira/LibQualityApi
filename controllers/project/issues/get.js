const logger = console; // from '../utils/logging/logger';

import BusinessService from '../../../businessServices/project/issues/get.js';

const calcAge = (issues) => {
  const sumAge = issues.reduce(reduceAge, 0);
  const avg = Math.ceil(sumAge / issues.length);

  const sumStd = issues.reduce((acc, i) => reduceStd(acc, i, avg), 0);

  const avgAge = sumStd / issues.length;
  const std = Math.ceil(Math.sqrt(avgAge));

  return { avg, std };
};
const reduceStd = (acc, i, avg) => acc + Math.pow(i.age - avg, 2);

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const reduceAge = (acc, issue) => {
  const created = new Date(issue.issue_created_at);
  const closed = issue.issue_closed_at ? new Date(issue.issue_closed_at) : new Date();

  const diffTime = Math.abs(closed - created);
  const diffDays = Math.floor(diffTime / _MS_PER_DAY);

  issue.age = diffDays;

  return acc + issue.age;
};

class GetController {
  constructor() {
    this.businessService = new BusinessService();
  }

  async get({ owner, repo }) {
    try {
      const issues = await this.businessService.loadIssues(owner, repo);

      const { avg, std } = calcAge(issues);

      return {
        repo: `${owner}/${repo}`,
        issues: issues.length,
        avg,
        std,
      };
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}

export default new GetController();

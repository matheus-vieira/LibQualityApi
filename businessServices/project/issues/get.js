import BusinessService from "../../businessService.js";
// import ProjectIssuesRepository from "../../repository/project/issues/repository.js";
import github from "../../../services/github.js";

class ReadBusinessService extends BusinessService {
  constructor() {
    super();

    // this.repository = new ProjectIssuesRepository();
  }

  async loadIssues(owner, repo) {
    console.log("getting paginated issues");
    try {
      const issues = await github.paginate("GET /repos/:owner/:repo/issues", {
        owner: owner,
        repo: repo,
      });
      console.log("getted paginated issues");

      return issues;
    } catch (err) {
      console.error(err);
    }
  }
}

export default ReadBusinessService;

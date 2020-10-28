import BusinessService from "../../businessService.js";
import IssuesRepository from "../../../repository/project/issue/repository.js";
import mapper from "../../../repository/project/issue/modelMapper.js";
import github from "../../../services/github.js";

class ReadBusinessService extends BusinessService {
  constructor() {
    super();

    this.repository = new IssuesRepository();
  }

  async loadIssues(owner, repo) {
    console.log("getting paginated issues");
    try {
      const repoIssues = await github.paginate(github.issues.listForRepo, {
        owner: owner,
        repo: repo,
      });
      console.log("getted paginated issues");

      const mappedIssues = repoIssues.map(mapper);

      return await this.repository.saveList(mappedIssues);
    } catch (err) {
      console.error(err);
    }
  }

  transform(issue) {
    return mapper(issue);
  }
}

export default ReadBusinessService;

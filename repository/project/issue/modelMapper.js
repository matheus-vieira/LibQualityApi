export default (repoIssue) => Object.assign(repoIssue, {
  'issue_created_at': repoIssue.created_at,
  'issue_updated_at': repoIssue.updated_at,
  'issue_closed_at': repoIssue.created_at
});
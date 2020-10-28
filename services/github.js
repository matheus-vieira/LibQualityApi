import rest from "@octokit/rest";
import logger from "../utils/logging/logger.js";

const octokit = new rest.Octokit({
  auth: process.env.GITHUB_KEY,
  userAgent: "lib_quality_api v1.2.3"
});

console.log("ocktokit configured");

export default octokit;

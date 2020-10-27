import terminus from "@godaddy/terminus";
import UserRepository from "../repository/user/repository.js";

function onSignal() {
  console.log("server is starting cleanup");
  // start cleanup of resource, like databases or file descriptors
}

async function onHealthCheck() {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
  try {
    const repo = new UserRepository();
    return await repo.isConnected();
  } catch (error) {
    logger.error("error on db: " + error);
  }
}

export default (server) => {
  terminus.createTerminus(server, {
    signal: "SIGINT",
    healthChecks: { "/healthcheck": onHealthCheck },
    onSignal,
  });
};

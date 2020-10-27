
import logger from "../utils/logging/logger.js";

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error, port) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      logger.error(bind + " requires elevated privileges");
      process.exit(1);
    /* falls through */
    case "EADDRINUSE":
      logger.error(bind + " is already in use");
      process.exit(1);
    /* falls through */
    default:
      throw error;
  }
}

const setOnError = (server) => {
  server.on("error", onError);
};

export default setOnError;

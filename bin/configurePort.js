/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);
  return isNaN(port) ? val : port >= 0 ? port : false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || "3000");

export default port;

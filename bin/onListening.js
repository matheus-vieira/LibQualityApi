import logger from '../utils/logging/logger.js';
/**
 * Event listener for HTTP server "listening" event.
 */
const setOnListening = (server) => {
  server.on('listening', () => {
    const addr = server.address();
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    logger.info('Binded on => ' + bind);
  });
};

export default setOnListening;

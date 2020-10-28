#!/usr/bin/env node


import { createServer } from 'http';

import app from '../app.js';
import configureSwagger from '../config/swagger/index.js';
import port from './configurePort.js';
import onError from './onError.js';
import onListening from './onListening.js';
import onTerminus from './terminus.js';

/**
 * Configuring Swagger.
 */
configureSwagger(app);

/**
 * Configuring server options.
 */

/**
 * Get port from environment and store in Express.
 */
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
onError(server, port);
onListening(server);
onTerminus(server);

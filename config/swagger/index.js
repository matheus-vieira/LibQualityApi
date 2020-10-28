import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import options from './options.js';

const configureSwagger = (app) => {
  const specs = swaggerJsdoc(options);
  app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
};

export default configureSwagger;

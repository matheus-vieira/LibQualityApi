import register from './register.js';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User management.
 */
const setRoutes = (app) => {
  app.use('/api/v1/auth', register);
};

export default setRoutes;

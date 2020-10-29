import register from './register.js';

const setRoutes = (app) => {
  app.use('/api/v1/auth', register);
};

export default setRoutes;

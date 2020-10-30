import get from './issues/get.js';

const setRoutes = (app) => {
  app.use('/api/v1/project', get);
};

export default setRoutes;

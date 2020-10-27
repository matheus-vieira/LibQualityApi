import usersRoute from './users/index.js';
import projectInfoRoute from './project/project-info.js';

const setRoutes = (app) => {
    usersRoute(app);
    app.use("/api/v1/project-info", projectInfoRoute);
};

export default setRoutes;
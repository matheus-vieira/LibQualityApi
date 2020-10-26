import usersRoute from './users.js';
import projectInfoRoute from './project-info.js';

const setRoutes = (app) => {
    app.use('/api/v1/users', usersRoute);
    app.use("/api/v1/project-info", projectInfoRoute);
};

export default setRoutes;
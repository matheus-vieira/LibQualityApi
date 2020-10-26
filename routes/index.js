import usersRoute from './users/users.js';
import projectInfoRoute from './project/project-info.js';

const setRoutes = (app) => {
    app.use('/api/v1/users', usersRoute);
    app.use("/api/v1/project-info", projectInfoRoute);
};

export default setRoutes;
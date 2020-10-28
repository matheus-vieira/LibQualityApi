import usersRoute from './users/index.js';
import projectIssuesoRoute from './project/issues/index.js';

const setRoutes = (app) => {
    usersRoute(app);
    projectIssuesoRoute(app);
};

export default setRoutes;
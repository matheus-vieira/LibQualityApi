import usersRoute from './users.js';

const setRoutes = (app) => {
    app.use("/users", usersRoute);
    // app.use("/repository/:name", repository);
};

export default setRoutes;
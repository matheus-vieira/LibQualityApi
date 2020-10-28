// import create from "./create.js";
import read from './read.js';
// import update from "./update.js";
// import remove from "./remove.js";

const setRoutes = (app) => {
  // app.use("/api/v1/users", create);
  app.use('/api/v1/users', read);
  // app.use("/api/v1/users", update);
  // app.use("/api/v1/users", remove);
};

export default setRoutes;

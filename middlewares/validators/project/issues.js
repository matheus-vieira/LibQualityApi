import expressValidator from "express-validator";

export default expressValidator.checkSchema({
  owner: {
    in: ["path"],
    errorMessage: "bad request",
    isString: true,
  },
  "project-name": {
    in: ["path"],
    errorMessage: "malformed request",
    isString: true,
  }        
});

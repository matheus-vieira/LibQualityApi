import expressValidator from "express-validator";

export default expressValidator.checkSchema({
  id: {
    in: ["body"],
    errorMessage: "malformed request",
    isInt: true,
    toInt: true,
  },
  firstName: {
    in: ["body"],
    errorMessage: "malformed request",
    isString: true,
  },
  lastName: {
    in: ["body"],
    errorMessage: "malformed request",
    isString: true,
  },
  age: {
    in: ["body"],
    errorMessage: "malformed request",
    isInt: true,
    toInt: true,
  },
});

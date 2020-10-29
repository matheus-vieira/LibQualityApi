import expressValidator from 'express-validator';

export default expressValidator.checkSchema({
  email: {
    in: ['body'],
    errorMessage: 'Please enter a valid email address',
    isString: true,
    isEmail: true,
    isEmpty: false,
  },
  password: {
    in: ['body'],
    errorMessage: 'bad request',
    isString: true,
    isLength: {
      options: { min: 6 },
      errorMessage: 'Password should be at least 6 chars long',
    },
  },
});

import Messages from './errorMessage.js';
const notFoundError = (key) => {
  let e = new Error(Messages[key].error.message);
  e.statusCode = 404;
  throw e;
};
const _notFoundError = notFoundError;
export { _notFoundError as notFoundError };

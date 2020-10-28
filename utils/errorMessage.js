const Messages = Object.create(null, {
  200: { value: { message: 'success' } },
  400: { value: { message: 'malformed request' } },
  500: { value: { message: 'internal server error' } },
});

export default Messages;

/**
 * Event listener for HTTP server "listening" event.
 */
const setOnListening = (server) => {
  server.on("listening", () => {
    const addr = server.address();
    const bind =
      typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on ", bind);
  });
};

export default setOnListening;

const http = require("http");
const PORT = 3000;

const server = http.createServer(function listner(request, response) {
  if (request.url == "/home") {
    response.end("welcome to home");
  }

  console.log("Request received");
});

server.listen(PORT, function exec() {
  console.log(`server is up and running on PORT: ${PORT}`);
});

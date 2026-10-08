const http = require("node:http");

const server = http.createServer((request, response) => {
  response.end("Hello from Node server");
});

server.listen(8080);
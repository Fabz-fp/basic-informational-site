const http = require("node:http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    response.end("You are on the home page!");
  } else if (request.url === "/about") {
    response.end("You are on the about page!");
  }
});

server.listen(8080);
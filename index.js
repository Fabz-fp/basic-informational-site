const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    fs.readFile("index.html", (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.end("Sorry, something went wrong.");
        return;
      }

      response.end(data);
    });
  } else if (request.url === "/about") {
    response.end("You are on the about page!");
  }
});

server.listen(8080);
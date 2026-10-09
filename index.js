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
    fs.readFile("about.html", (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.end("Sorry, something went wrong.");
        return;
      }

      response.end(data);
    });
  } else if (request.url === "/contact-me") {
    fs.readFile("contact-me.html", (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.end("Sorry, something went wrong.");
        return;
      }

      response.end(data);
    });
  } else {
    fs.readFile("404.html", (error, data) => {
      if (error) {
        response.statusCode = 500;
        response.end("Sorry, something went wrong.");
        return;
      }

      response.statusCode = 404;
      response.end(data);
    });
  }
});

server.listen(8080);
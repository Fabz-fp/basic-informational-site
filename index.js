const http = require("node:http");
const fs = require("node:fs");

function sendFile(fileName, response, statusCode = 200) {
  fs.readFile(fileName, (error, data) => {
    if (error) {
      response.statusCode = 500;
      response.end("Sorry, something went wrong.");
      return;
    }

    response.statusCode = statusCode;
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url === "/") {
    sendFile("index.html", response);
  } else if (request.url === "/about") {
    sendFile("about.html", response);
  } else if (request.url === "/contact-me") {
    sendFile("contact-me.html", response);
  } else {
    sendFile("404.html", response, 404);
  }
});

server.listen(8080);
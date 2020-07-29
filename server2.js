const http = require("http");

const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "application/json" });

    let obj = {
      firstName: "omprakash",
      lastName: "chautala",
    };
    res.end(JSON.stringify(obj));
  })
  .listen(1111, "127.0.0.1");

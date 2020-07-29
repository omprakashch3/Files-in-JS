const http = require("http");

const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.createReadStream(__dirname + "/index.html").pipe(res);
    } else if (req.url === "/api") {
      res.writeHead(200, { "content-type": "application/json" });

      let obj = {
        firstName: "omprakash",
        lastName: "chautala",
      };
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(1111, "127.0.0.1");

const http = require("http");

const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });

    fs.createReadStream(__dirname + "/index.html").pipe(res);
  })
  .listen(1111, "127.0.0.1");

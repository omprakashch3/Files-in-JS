const http = require("http");

const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });

    const html = fs.readFileSync(__dirname + "/index.html");
    // var message = "hey! how r u doing";
    // html = html.replace("{Message}", message);
    res.end(html);
  })
  .listen(1111, "127.0.0.1");

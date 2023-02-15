const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req)
  // res.write('Hello there user');
  // res.end();

  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>Hello There</h1>");
      res.write(data);
      res.end();
    });

    // res.writeHead(200,{'content-type': 'text/html'})
    // res.write('<a>welcome to home page</a>')
    // res.write('<p>welcome to home page</p>')
    // res.end();
  }
  if (req.url === "/user") {
    res.write("welcome user suchit");
    res.end();
  }
});

server.listen(3000, () => console.log("server is up and running"));

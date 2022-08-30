const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); //salir do event loop
});

server.listen(3000);

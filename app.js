const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  //   process.exit(); //salir do event loop
  res.setHeader("Content-Type", "text/html");
  res.write("<head><title>Enter Message</title><head>");
  res.write(
    '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
  );
  res.write("</html>");
  res.end();
});

server.listen(3000);

// const { console } = require("console");
const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  req.setHeader("Content-Type", "<text/html");
  console.log(req.url);

  if (req.url == "/") {
    req.StatusCode = 200;
    res.end("<h1>This is learning Phase!</h1> <p>Apna time ayega</p>");
  } else if (req.url == "/about") {
    res.StatusCode = 200;
    res.end(
      "<h1>About Manish, He will sucessful in Next 3 Year!</h1><p> Remember these word</p>"
    );
  } else {
    res.statusCode = 404;
    res.end("<h1> Not Found</h1><p> hey page is not in server!</p>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//This is not good idea to build Server.

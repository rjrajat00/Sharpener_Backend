const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  // Log your name
  res.write("Rajat  ");

  res.write("  hello sharpner this is node js");

  // Send the response
  res.end();
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

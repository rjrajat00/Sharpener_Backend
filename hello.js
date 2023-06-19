const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // Log your name

  let url = req.url;

  if (url === "/home") {
    res.write("<html>");

    res.write("<body><h1 style = 'red'>Welcome to Home  Page </h1> </body> ");

    res.write("</html>");
    return res.end();
  }

  if (url === "/about") {
    res.write("<html>");

    res.write("<body><h1 style = 'red'>Welcome to About Us </h1> </body> ");

    res.write("</html>");
    return res.end();
  }

  if (url === "/node") {
    res.write("<html>");

    res.write(
      "<body><h1 {style :red} >Welcome to MY Node JS Project </h1> </body> "
    );

    res.write("</html>");
    return res.end();
  }

  // Send the response
  res.end();
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

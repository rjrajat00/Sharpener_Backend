const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let url = req.url;
  let method = req.method;

  if (url === "/") {
    if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log("parsedBody==>", parsedBody);
        const message = parsedBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          if (err) {
            console.log(err);
          }
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        });
      });
    } else {
      fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) {
          console.log(err);
        }
        res.write("<html>");
        res.write("<head><title>Enter The Message</title></head>");
        res.write(
          `<body><form action="/" method="POST">
            <input type="text" name="message" placeholder="enter your message">
            <button type="submit">Send</button>
          </form>`
        );
        res.write(`<p> ${data}</p>`);
        res.write("</body></html>");
        res.end();
      });
    }
  }
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});

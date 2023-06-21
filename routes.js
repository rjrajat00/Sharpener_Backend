const fs = require("fs");

const reqHandler = (req, res) => {
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
};

module.exports = {
  handler: reqHandler,
  text: "sample text to be exported",
};

//  OR

// module.exports.handler= reqHandler;
// module.exports.text= "sample text to be exported";

//  OR

// exports.handler= reqHandler;
// exports.text= "sample text to be exported";

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

let messages = []; // Array to store messages

fs.readFile("username.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    messages = data.toString().split("\n").filter(Boolean);
  }
});

app.get("/", (req, res) => {
  res.send(`
    ${messages.join("<br>")}<html>
      <form action="/" method="POST">
        <input type="text" name="message" id="message" placeholder="type your message">
        <input type="text" name="username" id="username" placeholder="username(once only)">
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </html>
  `);
});

app.post("/", (req, res) => {
  const username = req.body.username;
  const message = req.body.message;

  fs.appendFile("username.txt", `${username}: ${message}\n`, (err) => {
    if (err) {
      console.log(err);
    } else {
      messages.push(`${username}: ${message}`);
      res.redirect("/");
    }
  });
});

app.listen(4000, () => {
  console.log("app.js running at port 4000");
});

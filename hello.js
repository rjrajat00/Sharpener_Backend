const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h2>hello from my express app</h2>");
});

app.listen(5000);

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("first mW>");
  res.send(
    "<html><body>   <h2>  Add product page </h2> <form action='/product' method='POST'> <input type='text' name='title' placeholder='name' >  <input type='text' name='size' placeholder='size' > <button type='submit'>Add Product</button></form></body></html>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  const { title, size } = req.body;
  console.log("Product title:", title);
  console.log("Product size:", size);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h2>hello from my express app</h2>");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

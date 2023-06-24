const express = require("express");

const router = express.Router();

//  /admin/add-product  ==> GET req

router.get("/add-product", (req, res, next) => {
  console.log("first mW>");
  res.send(
    "<html><body>   <h2>  Add product page </h2> <form action='/admin/add-product' method='POST'> <input type='text' name='title' placeholder='name' >  <input type='text' name='size' placeholder='size' > <button type='submit'>Add Product</button></form></body></html>"
  );
});

//  /admin/add-product  ==> POST req
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  const { title, size } = req.body;
  console.log("Product title:", title);
  console.log("Product size:", size);
  console.log(size, title);

  res.redirect("/");
});

module.exports = router;

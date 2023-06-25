const path = require("path");

const express = require("express");

const router = express.Router();

//  /admin/add-product  ==> GET req

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
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

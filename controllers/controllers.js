const path = require("path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  const { title, size } = req.body;
  console.log("Product title:", title);
  console.log("Product size:", size);
  console.log(size, title);

  res.redirect("/");
};

exports.getShop = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

const express = require("express");

const path = require("path");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get("/aboutus", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
});

router.post("/submitform", (req, res, next) => {
  const { name, email } = req.body;

  console.log(name);
  console.log(email);

  res.redirect("/success");
});

router.get("/success", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "success.html"));
});

module.exports = router;

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<html><h1>404 Error: Page Not Found</h1></html>");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

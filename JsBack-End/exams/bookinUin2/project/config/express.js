const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = express.urlencoded;
const cookieParser = require("cookie-parser");

module.exports = (app) => {
  app.engine(".hbs", hbs.engine({ extname: ".hbs" }));
  app.set("view engine", ".hbs");

  app.use("/static", express.static("static"));
  app.use("/js", express.static("js"));
  app.use(bodyParser({ extended: false }));
  app.use(cookieParser());
};

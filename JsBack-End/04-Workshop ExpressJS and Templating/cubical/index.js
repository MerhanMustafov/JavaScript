const express = require("express");
const hbs = require("express-handlebars");

const { catalog } = require("./controllers/catalog");
const { about } = require("./controllers/about");
const { details } = require("./controllers/details");
const { create } = require("./controllers/create");
const { post } = require("./controllers/create");
const { notFound } = require("./controllers/notFound");
const { init: storage } = require("./models/storage_mdlw");

start();

async function start() {
  const port = 3000;

  const app = express();

  app.engine(".hbs", hbs({ extname: ".hbs" }));
  app.set("view engine", ".hbs");

  app.use("/static", express.static("static")); //midleware
  app.use("/js", express.static("js")); //midleware
  app.use(express.urlencoded({ extended: false }));
  //   app.use(await storage()); //midleware
  app.get("/", await storage(), catalog);
  app.get("/about", await storage(), about);
  app.get("/details/:id", await storage(), details);
  app.get("/create", await storage(), create);
  app.post("/create", await storage(), post);

  app.all("*", notFound);

  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

const express = require("express");
const hbs = require("express-handlebars");
const home = require("./controllers/home.js");
const addCat = require("./controllers/addCat.js");
const { init: midleware } = require("./modules/storage");

start();
async function start() {
  const app = express();
  const port = 3000;

  app.engine(
    ".hbs",
    hbs.engine({
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");
  app.use("/static", express.static("static"));
  app.use(await midleware());
  app.use(express.urlencoded({ extended: false }));

  app.use("/", home);
  app.use("/addCat", addCat);

  app.listen(port, () => console.log("Server in listening on port " + port));
}

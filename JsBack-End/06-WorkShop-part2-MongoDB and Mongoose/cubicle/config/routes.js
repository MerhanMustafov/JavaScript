const { catalog } = require("../controllers/catalog");
const { about } = require("../controllers/about");
const { details, attach, attachPost } = require("../controllers/details");
const { create } = require("../controllers/create");
const { post: commentPost } = require("../controllers/comments");
const { createAccessory, accessoryPost } = require("../controllers/accessory");
const { post } = require("../controllers/create");

const { notFound } = require("../controllers/notFound");

module.exports = (app) => {
  app.get("/", catalog);
  app.get("/about", about);
  app.get("/details/:id", details);
  app.get("/create", create);
  app.post("/create", post);
  app.post("/comments/:cubeId/create", commentPost);
  app.get("/accessory/create", createAccessory);
  app.post("/accessory/create", accessoryPost);
  app.get("/details/:id/attach", attach);
  app.post("/details/:cubeId/attach", attachPost);
  app.all("*", notFound);
};

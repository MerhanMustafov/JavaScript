const routes = require("express").Router();
module.exports = routes;

routes.get("/", async (req, res) => {
	res.render("home.hbs");
});

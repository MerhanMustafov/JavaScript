const routes = require("express").Router();

routes.get("/", async (req, res) => {
	res.render("home.hbs");
});

module.exports = routes;

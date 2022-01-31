const routes = require("express").Router();

routes.get("*", async (req, res) => {
	res.render("404.hbs");
});

module.exports = routes;

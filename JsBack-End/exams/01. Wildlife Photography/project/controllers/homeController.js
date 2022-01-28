const routes = require("express").Router();

routes.get("/", async (req, res) => {
	// title : Home Page
	res.render("home.hbs");
});

module.exports = routes;

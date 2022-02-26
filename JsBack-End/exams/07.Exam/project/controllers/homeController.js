const route = require("express").Router();

route.get("/", async (req, res) => {
	res.render("home.hbs");
});

module.exports = route;

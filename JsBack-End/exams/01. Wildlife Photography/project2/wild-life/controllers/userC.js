const routes = require("express").Router();
module.exports = routes;
routes.get("/register", async (req, res) => {
	res.render("user/register.hbs");
});

routes.get("/login", async (req, res) => {
	res.render("user/login.hbs");
});

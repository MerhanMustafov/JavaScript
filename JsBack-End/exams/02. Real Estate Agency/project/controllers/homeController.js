const route = require("express").Router();

route.get("/", async (req, res) => {
	const lastThree = await req.storage.getLastThree();
	res.render("home.hbs", { lastThree });
});

module.exports = route;

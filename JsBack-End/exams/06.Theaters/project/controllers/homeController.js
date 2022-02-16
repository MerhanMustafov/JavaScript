const route = require("express").Router();

route.get("/", async (req, res) => {
	let plays;
	if (req.user) {
		plays = await req.storage.getAll();
	} else {
		plays = await req.storage.getBestThree();
	}
	req.user ? plays.forEach((p) => (p.user = req.user)) : false;
	console.log(plays);
	res.render("home.hbs", { plays });
});

module.exports = route;

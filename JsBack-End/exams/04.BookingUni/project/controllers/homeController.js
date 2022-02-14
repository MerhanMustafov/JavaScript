const route = require("express").Router();

route.get("/", async (req, res) => {
	const hotels = await req.storage.getAllHotels();
	res.render("home/home.hbs", { hotels });
});

module.exports = route;

const router = require("express").Router();

router.get("/", async (req, res) => {
	const hotels = await req.storage.getAllHotels();
	// console.log("RES.LOCALS>>>>>>>", res.locals);

	res.render("home/home.hbs", { hotels });
});

router.get("/user", async (req, res) => {
	console.log(
		"homeController req / >>>>>",
		`req.path ${req.path}`,
		`req.query ${req.query.name}`
	);
	const hotels = await req.storage.getAllHotels();

	res.render("home/home.hbs", { hotels });
});

module.exports = router;

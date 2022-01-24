const router = require("express").Router();

router.get("/", async (req, res) => {
	const plays = await req.storage.getAllPlays(req.query.orderedBy);
	res.render("home", { plays, user: req.user });
});

module.exports = router;

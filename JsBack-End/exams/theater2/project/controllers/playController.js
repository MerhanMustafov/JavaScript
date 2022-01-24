const { isUser } = require("../middlewares/guards");

const router = require("express").Router();
const { parseError } = require("../utils/parseError");

router.get("/like/:_id", isUser(), async (req, res) => {
	try {
		const play = await req.storage.getPlayById(req.params._id);
		if (play.author == req.user._id) {
			throw new Error("Cannot like your own play!");
		}

		await req.storage.likePlay(req.params._id, req.user._id);

		res.redirect("/play/details/" + req.params._id);
	} catch (err) {
		console.log(err.message);
		res.redirect("/play/details/" + req.params._id);
	}
});

router.get("/create", isUser(), async (req, res) => {
	res.render("play/create");
});

router.get("/details/:_id", async (req, res) => {
	try {
		const play = await req.storage.getPlayById(req.params._id);
		play.isAuthor = req.user && req.user._id == play.author;
		play.liked =
			req.user && play.userLiked.find((u) => u._id == req.user._id);
		res.render("play/details", play);
	} catch (err) {
		res.redirect("/404");
	}
});

router.get("/edit/:_id", isUser(), async (req, res) => {
	try {
		const play = await req.storage.getPlayById(req.params._id);
		if (play.author != req.user._id) {
			throw new Error("Cannot edit play you have not created yet!");
		}
		res.render("play/edit", { play });
	} catch (err) {
		console.log(err.message);
		res.redirect("/play/details/" + req.params._id);
	}
});

router.get("/delete/:_id", isUser(), async (req, res) => {
	try {
		const play = await req.storage.getPlayById(req.params._id);
		if (play.author != req.user._id) {
			throw new Error("Cannot delete play you have not created yet!");
		}

		await req.storage.deletePlay(req.params._id);

		res.redirect("/");
	} catch (err) {
		console.log(err.message);
		res.redirect("/play/details/" + req.params._id);
	}
});

router.post("/edit/:_id", isUser(), async (req, res) => {
	try {
		const play = await req.storage.getPlayById(req.params._id);
		if (play.author != req.user._id) {
			throw new Error("Cannot delete play you have not created yet!");
		}
		await req.storage.editPlay(req.params._id, req.body);
		res.redirect("/");
	} catch (err) {
		console.log(err.message);
		const ctx = {
			errors: parseError(err),
			play: {
				_id: req.params._id,
				title: req.body.title,
				description: req.body.description,
				imageUrl: req.body.imageUrl,
				isPublic: Boolean(req.body.isPublic),
			},
		};
		console.log(">>>>>>>>> /edit/:_id", "   ", ctx);
		res.render("play/edit", ctx);
	}
});

router.post("/create", isUser(), async (req, res) => {
	console.log(req.body);

	// console.log("BOOLEAN", Boolean(req.body.isPublic));
	try {
		const playData = {
			title: req.body.title,
			description: req.body.description,
			imageUrl: req.body.imageUrl,
			isPublic: Boolean(req.body.isPublic),
			author: req.user._id,
		};
		console.log(playData);

		await req.storage.createPlay(playData);
		res.redirect("/");
	} catch (err) {
		const ctx = {
			errors: parseError(err),
			playData: {
				title: req.body.title,
				description: req.body.description,
				imageUrl: req.body.imageUrl,
				isPublic: Boolean(req.body.isPublic),
			},
		};
		console.log(ctx.playData);

		console.log(ctx);
		res.render("play/create", ctx);
	}
});
module.exports = router;

const route = require("express").Router();
const { isGuest, isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/sortByDate", isUser(), async (req, res) => {
	const plays = await req.storage.getSortedByDate();
	req.user ? plays.forEach((p) => (p.user = req.user)) : false;
	res.render("home.hbs", { plays });
});

route.get("/sortByLikes", isUser(), async (req, res) => {
	const plays = await req.storage.getSortedByLikes();
	req.user ? plays.forEach((p) => (p.user = req.user)) : false;
	res.render("home.hbs", { plays });
});

route.post(
	"/edit/:id",
	isUser(),
	body("title").not().isEmpty().withMessage("title should not be empty"),
	body("description")
		.not()
		.isEmpty()
		.withMessage("description should not be empty"),
	body("description")
		.isLength({ max: 50 })
		.withMessage("description can not be more than 50 characters long !"),
	body("imageUrl")
		.not()
		.isEmpty()
		.withMessage("imageUrl should not be empty"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const playData = {
				title: req.body.title,
				description: req.body.description,
				imageUrl: req.body.imageUrl,
				isPublic: req.body.isPublic == "on" ? true : false,
			};
			await req.storage.editPlay(req.params.id, playData);
			res.redirect(`/play/details/${req.params.id}`);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				playData: {
					_id: req.params.id,
					title: req.body.title,
					description: req.body.description,
					imageUrl: req.body.imageUrl,
					isPublic: req.body.isPublic,
				},
			};
			res.render("play/edit", ctx);
		}
	}
);

route.get("/edit/:id", isUser(), async (req, res) => {
	const playId = req.params.id;
	const playData = await req.storage.getPlayById(playId);
	res.render("play/edit.hbs", { playData });
});

route.get("/delete/:id", isUser(), async (req, res) => {
	const playId = req.params.id;
	await req.storage.deletePlay(playId);
	res.redirect("/");
});

route.get("/like/:id", isUser(), async (req, res) => {
	const playId = req.params.id;
	const userId = req.user._id;
	console.log(req.user);
	await req.storage.addLike(playId, userId);
	res.redirect(`/play/details/${playId}`);
});

route.get("/create", isUser(), async (req, res) => {
	res.render("play/create.hbs");
});

route.get("/details/:id", isUser(), async (req, res) => {
	const playId = req.params.id;
	const play = await req.storage.getPlayById(playId);
	play.isCreator = req.user && req.user._id == play.creator._id;
	play.isLiked =
		req.user && play.likedUsers.filter((u) => u._id == req.user._id);
	play.isCreator = req.user && play.creator._id == req.user._id;
	res.render("play/details.hbs", play);
});
route.post(
	"/create",
	isUser(),
	body("title").not().isEmpty().withMessage("title should not be empty"),
	body("description")
		.not()
		.isEmpty()
		.withMessage("description should not be empty"),
	body("description")
		.isLength({ max: 50 })
		.withMessage("description can not be more than 50 characters long !"),
	body("imageUrl")
		.not()
		.isEmpty()
		.withMessage("imageUrl should not be empty"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const playData = {
				title: req.body.title,
				description: req.body.description,
				imageUrl: req.body.imageUrl,
				isPublic: req.body.isPublic == "on" ? true : false,
				likedUsers: [],
				creator: req.user._id,
				likes: 0,
			};
			await req.storage.createPlay(playData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				playData: {
					title: req.body.title,
					description: req.body.description,
					imageUrl: req.body.imageUrl,
					isPublic: req.body.isPublic,
				},
			};
			res.render("play/create", ctx);
		}
	}
);

// •	The title should not be empty
// •	The description should not be empty
// •	The imageUrl should not be empty

module.exports = route;

const routes = require("express").Router();
const { isUser } = require("../midlewares/guards");
const { body, validationResult } = require("express-validator");

// GET
routes.get("/create", async (req, res) => {
	res.render("create.hbs");
});

routes.get("/allPosts", async (req, res) => {
	const posts = await req.storage.getAllPosts();
	res.render("all-posts.hbs", { posts });
});

routes.get("/myPosts", async (req, res) => {
	const myPosts = await req.storage.getMyPosts(req.user._id);
	console.log(myPosts);
	res.render("my-posts.hbs", { myPosts });
});

routes.get("/delete/:postId", async (req, res) => {
	await req.storage.deletePost(req.params.postId);
	res.redirect("/posts/allPosts");
});

routes.get("/details/:postId", async (req, res) => {
	const post = await req.storage.getPostByPostId(req.params.postId);
	post.isAuthor = req.user && post.author && req.user._id == post.author._id;
	post.isNotAuthor = !post.isAuthor;
	const findIsVoted = post.votes.filter(
		(votesUser) => req.user?._id == votesUser._id
	);
	post.isVoted = req.user && findIsVoted.length == 0 ? false : true;
	res.render("details.hbs", post);
});

routes.get("/upVote/:postId", async (req, res) => {
	const post = await req.storage.vote(
		true,
		false,
		req.params.postId,
		req.user._id
	);
	res.redirect(`/posts/details/${req.params.postId}`);
});

routes.get("/downVote/:postId", async (req, res) => {
	const post = await req.storage.vote(
		false,
		true,
		req.params.postId,
		req.user._id
	);
	res.redirect(`/posts/details/${req.params.postId}`);
});
routes.get("/edit/:postId", async (req, res) => {
	const post = await req.storage.getPostByPostId(req.params.postId);
	res.render("edit.hbs", post);
});

// POST
routes.post("/edit/:postId", async (req, res) => {
	const postData = {
		title: req.body.title,
		keyword: req.body.keyword,
		location: req.body.location,
		dataOfCreation: req.body.dataOfCreation,
		image: req.body.image,
		description: req.body.description,
	};
	const post = await req.storage.getPostByPostId(
		req.params.postId,
		true,
		postData
	);
	res.redirect(`/posts/details/${post._id}`);
});

routes.post(
	"/create",
	isUser(),
	body("title")
		.isLength({ min: 6 })
		.withMessage("Title should be at least 6 characters long!"),
	body("keyword")
		.isLength({ min: 6 })
		.withMessage("Keyword should be at least 6 characters long!"),
	body("location")
		.isLength({ max: 15 })
		.withMessage("Location can not be more than 15 charactars long!"),
	body("dateOfCreation")
		.isLength(10)
		.withMessage("Date should be exactly 10 characters long!"),
	body("image").custom((value) => {
		const pattern = new RegExp(`^https?:\/\/`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("Image is incorrect!");
		}
	}),
	body("description")
		.isLength({ min: 8 })
		.withMessage("Description should be at least 8 characters long!"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const postData = {
				title: req.body.title,
				keyword: req.body.keyword,
				location: req.body.location,
				dataOfCreation: req.body.dateOfCreation,
				image: req.body.image,
				description: req.body.description,
				author: req.user._id,
				votes: [],
				postRating: 0,
			};
			await req.storage.createPost(postData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					title: req.body.title,
					keyword: req.body.keyword,
					location: req.body.location,
					dateOfCreation: req.body.dateOfCreation,
					image: req.body.image,
					description: req.body.description,
				},
			};
			res.render("create.hbs", ctx);
		}
	}
);

module.exports = routes;

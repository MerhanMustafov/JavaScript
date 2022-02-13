const route = require("express").Router();
const { isGuest, isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/profile/:id", isUser(), async (req, res) => {
	const user = await req.storage.getUserById(req.user._id);
	user.tripsCount = user.tripsHistory.length;
	res.render("profile.hbs", user);
});

route.get("/register", isGuest(), async (req, res) => {
	res.render("register.hbs");
});

route.get("/login", isGuest(), async (req, res) => {
	res.render("login.hbs");
});
route.get("/logout", isUser(), async (req, res) => {
	await req.auth.logout();
	res.redirect("/");
});
route.post(
	"/register",
	isGuest(),
	body("email").isEmail().withMessage("invalid Email !"),
	body("password")
		.isLength({ min: 4 })
		.withMessage("Password must be at least 4 characters long !"),
	body("rePass").custom((value, { req }) => {
		if (value == req.body.password) {
			return true;
		} else {
			throw new Error("Passwords don't match");
		}
	}),
	async (req, res) => {
		console.log(req.body);
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
				email: req.body.email,
				gender: req.body.gender,
				password: req.body.password,
			};
			const user = await req.auth.register(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					email: req.body.email,
					gender: req.body.gender,
				},
			};
			res.render("register.hbs", ctx);
		}
	}
);

route.post(
	"/login",
	isGuest(),
	body("email").isEmail().withMessage("incorrect email !"),
	body("password")
		.isLength({ min: 4 })
		.withMessage("password must be at least 4 characters long !"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
				email: req.body.email,
				password: req.body.password,
			};
			const user = await req.auth.login(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					email: req.body.email,
				},
			};
			res.render("login.hbs", ctx);
		}
	}
);

module.exports = route;

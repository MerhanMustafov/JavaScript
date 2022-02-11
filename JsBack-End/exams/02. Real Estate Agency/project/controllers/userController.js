const route = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest, isUser } = require("../middlewares/guard");

route.get("/login", isGuest(), async (req, res) => {
	res.render("login.hbs");
});
route.get("/register", isGuest(), async (req, res) => {
	res.render("register.hbs");
});
route.get("/logout", isUser(), async (req, res) => {
	req.auth.logout();
	res.redirect("/");
});
route.post(
	"/register",
	isGuest(),
	body("name").custom((value) => {
		const pattern = new RegExp(`^[A-Za-z]+ [A-Za-z]+$`);
		if (!pattern.test(value)) {
			throw new Error("incorrect name!");
		}
		return true;
	}),
	body("username")
		.isLength({ min: 5 })
		.withMessage("Username must be at least 5 characters long!"),
	body("password")
		.isLength({ min: 4 })
		.withMessage("Password must be at least 4 characters long!"),
	body("rePass").custom((value, { req }) => {
		if (value != req.body.password) {
			throw new Error("Passwords don't match");
		}
		return true;
	}),
	async (req, res) => {
		const result = validationResult(req);
		try {
			if (result.errors.length > 0) {
				const message = result.errors.map((err) => err.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
				name: req.body.name,
				username: req.body.username,
				password: req.body.password,
			};
			await req.auth.register(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					name: req.body.name,
					username: req.body.username,
				},
			};
			res.render("register.hbs", ctx);
		}
	}
);

route.post(
	"/login",
	isGuest(),
	body("username")
		.isLength({ min: 5 })
		.withMessage("Username must be at least 5 characters long"),
	body("password")
		.isLength({ min: 4 })
		.withMessage("Password must be at least 4 characters long"),
	async (req, res) => {
		const result = validationResult(req);
		try {
			if (result.errors.length > 0) {
				const message = result.errors.map((err) => err.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
				name: req.body.name,
				username: req.body.username,
				password: req.body.password,
			};
			await req.auth.login(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					username: req.body.username,
				},
			};
			res.render("login.hbs", ctx);
		}
	}
);

module.exports = route;

const route = require("express").Router();
const { isGuest, isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

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
	body("username").custom((value) => {
		const pattern = new RegExp(`^[A-Za-z0-9]+$`, "i");
		if (!pattern.test(value)) {
			throw new Error(
				"username must contain only digits and english letters !"
			);
		}
		if (value.length < 3) {
			throw new Error("username must be at leat 3 characters long !");
		}
		return true;
	}),
	body("password").custom((value) => {
		const pattern = new RegExp(`^[A-Za-z0-9]+$`, "i");
		if (!pattern.test(value)) {
			throw new Error(
				"password must contain only digits and english letters !"
			);
		}
		if (value.length < 3) {
			throw new Error("password must be at leat 3 characters long !");
		}
		return true;
	}),
	body("rePass").custom((value, { req }) => {
		if (value != req.body.password) {
			throw new Error("Passwords don't match");
		}
		return true;
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
				username: req.body.username,
				password: req.body.password,
			};
			await req.auth.register(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					username: req.body.username,
				},
			};
			res.render("register.hbs", ctx);
		}
	}
);

route.post("/login", isGuest(), async (req, res) => {
	try {
		const userData = {
			username: req.body.username,
			password: req.body.password,
		};
		await req.auth.login(userData);
		res.redirect("/");
	} catch (err) {
		const ctx = {
			errors: [err.message],
			userData: {
				username: req.body.username,
			},
		};
		res.render("login.hbs", ctx);
	}
});

module.exports = route;

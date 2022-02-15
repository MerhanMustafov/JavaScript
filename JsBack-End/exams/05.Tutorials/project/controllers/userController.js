const route = require("express").Router();
const { isGuest, isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/register", isGuest(), async (req, res) => {
	res.render("user pages/register.hbs");
});
route.get("/login", isGuest(), async (req, res) => {
	res.render("user pages/login.hbs");
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
		if (value.length < 5) {
			throw new Error("username must be at least 5 characters long !");
		}
		if (!pattern.test(value)) {
			throw new Error("username must be only english letter and digits");
		}
		return true;
	}),
	body("password").custom((value) => {
		const pattern = new RegExp(`^[A-Za-z0-9]+$`, "i");
		if (Number(value) < 5) {
			throw new Error("password must be at least 5 characters long !");
		}
		if (!pattern.test(value)) {
			throw new Error("password must be only english letter and digits");
		}
		return true;
	}),
	body("rePassword").custom((value, { req }) => {
		if (value != req.body.password) {
			throw new Error("passwords don't match !'");
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
			res.render("user pages/register.hbs", ctx);
		}
	}
);

route.post(
	"/login",
	isGuest(),
	body("username").custom((value) => {
		const pattern = new RegExp(`^[A-Za-z0-9]+$`, "i");
		if (value.length < 5) {
			throw new Error("username must be at least 5 characters long !");
		}
		if (!pattern.test(value)) {
			throw new Error("username must be only english letter and digits");
		}
		return true;
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((err) => err.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
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
			res.render("user pages/login.hbs", ctx);
		}
	}
);
module.exports = route;

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
	body("email")
		.isEmail()
		.withMessage(
			"Email must be in the following format <name>@<domain>.<extension>"
		),
	body("password")
		.isLength({ min: 5 })
		.withMessage("Password must be at least 5 characters long!"),
	body("rePass").custom((value, { req }) => {
		if (value != req.body.password) {
			throw new Error("Passwords don't match");
		}
		return true;
	}),
	body("description")
		.isLength({ max: 40 })
		.withMessage("description should be maxsimum 40 chcaracters long !"),
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
				description: req.body.description,
			};
			await req.auth.register(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					email: req.body.email,
					description: req.body.description,
				},
			};
			res.render("register.hbs", ctx);
		}
	}
);

route.post("/login", isGuest(), async (req, res) => {
	try {
		const userData = {
			email: req.body.email,
			password: req.body.password,
		};
		await req.auth.login(userData);
		res.redirect("/");
	} catch (err) {
		const ctx = {
			errors: [err.message],
			userData: {
				email: req.body.email,
			},
		};
		res.render("login.hbs", ctx);
	}
});

module.exports = route;

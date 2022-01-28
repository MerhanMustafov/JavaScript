const routes = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest } = require("../midlewares/guards");

routes.get("/register", isGuest(), async (req, res) => {
	res.render("user/register.hbs");
});
routes.get("/login", isGuest(), async (req, res) => {
	res.render("user/login.hbs");
});
routes.get("/logout", async (req, res) => {
	req.auth.logout();
	res.redirect("/");
});

routes.post(
	"/login",
	isGuest(),
	body("email").isEmail().withMessage("Incorrect email"),
	body("password")
		.isLength({ min: 4 })
		.withMessage("Password must be at least 4 characters long"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const userData = {
				password: req.body.password,
				email: req.body.email,
			};
			await req.auth.login(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: { email: req.body.email },
			};
			res.render("user/login", ctx);
		}
	}
);
routes.post(
	"/register",
	isGuest(),
	body("firstName")
		.isLength({ min: 3 })
		.withMessage("First name must be at least 3 characters long")
		.matches(/^[A-Za-z]+$/)
		.withMessage("First name must be alphabetic."),
	body("lastName")
		.isLength({ min: 5 })
		.withMessage("Last name must be at least 5 characters long")
		.matches(/^[A-Za-z]+$/)
		.withMessage("Last name must be alphabetic."),
	body("email").isEmail().withMessage("Incorrect email"),
	body("password")
		.isLength({ min: 4 })
		.withMessage("Password must be at least 4 characters long"),
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
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: req.body.password,
			};
			await req.auth.register(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
				},
			};
			res.render("user/register.hbs", ctx);
			// console.log(err.message.split("\n"));
		}
	}
);
module.exports = routes;

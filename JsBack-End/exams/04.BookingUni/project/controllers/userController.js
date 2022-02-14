const route = require("express").Router();
const { isUser, isGuest } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/profile", isUser(), async (req, res) => {
	const userId = req.user._id;
	const user = await req.storage.getUserById(userId);
	user.reservations = user.bookedHotels.map((hotel) => hotel.name).join(", ");
	res.render("user/profile.hbs", user);
});

route.get("/login", isGuest(), async (req, res) => {
	res.render("user/login.hbs");
});
route.get("/register", isGuest(), async (req, res) => {
	res.render("user/register.hbs");
});
route.get("/logout", isUser(), async (req, res) => {
	req.auth.logout();
	res.redirect("/");
});

route.post(
	"/register",
	isGuest(),
	body("email").isEmail().withMessage("invalid email"),
	body("password")
		.isLength({ min: 5 })
		.withMessage("password must be at least 5 characters long !"),
	body("rePassword").custom((value, { req }) => {
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
				email: req.body.email,
				username: req.body.username,
				password: req.body.password,
			};
			const user = await req.auth.register(userData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					email: req.body.email,
					username: req.body.username,
					password: req.body.password,
				},
			};
			res.render("user/register.hbs", ctx);
		}
	}
);

route.post(
	"/login",
	isGuest(),
	body("email").isEmail().withMessage("invalid email !"),
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
			res.render("user/login.hbs", ctx);
		}
	}
);

module.exports = route;

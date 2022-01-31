const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest } = require("../middlewares/guards");

router.get("/register", isGuest(), (req, res) => {
	res.render("register.hbs");
});

router.post(
	"/register",
	isGuest(),
	body("email")
		.isLength({ min: 5 })
		.withMessage("Email must be at least 5 characters long")
		.bail()
		.isAlphanumeric()
		.withMessage(
			"Username should consist only from english letters and digits"
		),
	body("password")
		.isLength({ min: 5 })
		.withMessage("Password must be at least 3 characters long")
		.bail()
		.isAlphanumeric()
		.withMessage(
			"Password should consist only from english letters and digits"
		),
	body("rePass").custom((value, { req }) => {
		if (value != req.body.password) {
			throw new Error("Passwords don't match");
		}
		return true;
	}),
	async (req, res) => {
		const { errors } = validationResult(req);
		try {
			if (errors.length > 0) {
				throw new Error(
					Object.values(errors)
						.map((e) => e.msg)
						.join("\n")
				);
			}
			await req.auth.register(req.body.username, req.body.password);

			res.redirect("/");
		} catch (err) {
			console.log(err.message);
			const ctx = {
				errors: err.message.split("\n"),
				userData: {
					username: req.body.username,
				},
			};
			res.render("register", ctx);
		}
	}
);

router.get("/login", isGuest(), (req, res) => {
	res.render("login.hbs");
});

router.post("/login", isGuest(), async (req, res) => {
	try {
		await req.auth.login(req.body.username, req.body.password);
		res.redirect("/");
	} catch (err) {
		console.log("authController >>>", err.message);
		const ctx = {
			errors: [err.message],
			userData: {
				username: req.body.username,
			},
		};
		res.render("login", ctx);
	}
});

router.get("/logout", (req, res) => {
	req.auth.logout();
	res.redirect("/");
});

module.exports = router;
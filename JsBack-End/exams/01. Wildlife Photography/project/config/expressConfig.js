const hbs = require("express-handlebars");
const express = require("express");
const cookieParser = require("cookie-parser");

const userMidleware = require("../midlewares/userMidleware");
const postMidleware = require("../midlewares/postMidleware");

module.exports = (app) => {
	app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultLayout: "main" }));
	app.set("view engine", ".hbs");

	app.use("/static", express.static("static"));
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.use(userMidleware());
	app.use(postMidleware());

	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.log(">>> ", req.method, ">>> ", req.url);

			if (req.user) {
				console.log(
					`Known user ${req.user.firstName} ${req.user.lastName}`
				);
			}
		}
		next();
	});
};

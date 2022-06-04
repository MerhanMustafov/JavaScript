const express = require("express");
const hbs = require("express-handlebars");
const cookieParser = require("cookie-parser");

const userMidleware = require("../middlewares/userM");
module.exports = (app) => {
	app.engine(".hbs", hbs.engine({ defaultLayout: "main", extname: ".hbs" }));
	app.set("view engine", ".hbs");

	app.use("/static", express.static("static"));
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.use(userMidleware());

	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.log(`>>> ${req.method} >>> ${req.url}`);

			if (req.user) {
				console.log(
					`furstName: ${req.user.firstName} lastName: ${req.user.lastName}`
				);
			}
		}
		next();
	});
};

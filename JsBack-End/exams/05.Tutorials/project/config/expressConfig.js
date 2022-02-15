const express = require("express");
const hbs = require("express-handlebars");
const cookieParser = require("cookie-parser");

const userMidleware = require("../middlewares/userMiddleware");
const courseMidleware = require("../middlewares/courseMiddleware");

module.exports = (app) => {
	app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultLayout: "main" }));
	app.set("view engine", ".hsb");

	app.use("/static", express.static("static"));
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.use(userMidleware());
	app.use(courseMidleware());
	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.log(req.method, " ", req.url);
		}
		next();
	});
};

const express = require("express");
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");
const userMidleware = require("../middlewares/userMiddleware");
const storageMidleware = require("../middlewares/houseMidleware");

module.exports = (app) => {
	app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultLayout: "main" }));
	app.set("view engine", ".hbs");

	app.use("/static", express.static("static"));
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser());

	app.use(userMidleware());
	app.use(storageMidleware());

	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.log(req.method, req.url);
		}
		next();
	});
};

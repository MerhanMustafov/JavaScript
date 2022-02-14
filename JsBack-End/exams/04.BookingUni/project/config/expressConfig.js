const express = require("express");
const cookieParser = require("cookie-parser");
const hbs = require("express-handlebars");

const userMidleware = require("../middlewares/userMiddleware");
const storageMidleware = require("../middlewares/hotelMiddleware");

module.exports = (app) => {
	app.engine(
		".hbs",
		hbs.engine({ extname: ".hbs", defaultLayout: "main.hbs" })
	);
	app.set("view engine", ".hbs");

	app.use("/static", express.static("static"));
	app.use(cookieParser());
	app.use(express.urlencoded({ extended: true }));

	app.use(userMidleware());
	app.use(storageMidleware());
	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.info(req.method, " ", req.url);
		}
		next();
	});
};

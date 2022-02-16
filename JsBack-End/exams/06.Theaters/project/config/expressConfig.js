const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = express.urlencoded({ extended: true });
const hbs = require("express-handlebars");

const userMiddleware = require("../middlewares/userMiddleware");
const playMiddleware = require("../middlewares/playMiddleware");
module.exports = (app) => {
	app.engine(".hbs", hbs.engine({ extname: ".hbs", defaultLayout: "main" }));
	app.set("view engine", ".hbs");

	app.use("/static", express.static("static"));
	app.use(bodyParser);
	app.use(cookieParser());

	app.use(userMiddleware());
	app.use(playMiddleware());

	app.use((req, res, next) => {
		if (!req.url.includes("/favicon")) {
			console.log(req.method, " ", req.url);
		}
		next();
	});
};

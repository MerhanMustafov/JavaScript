// const homeController = require("../controllers/home");
const authController = require("../controllers/user/auth");

module.exports = (app) => {
	//   app.use("/", homeController);
	app.use("/auth", authController);
};

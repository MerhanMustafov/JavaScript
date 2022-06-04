const homeController = require("../controllers/homeC");
const userController = require("../controllers/userC");

module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
};

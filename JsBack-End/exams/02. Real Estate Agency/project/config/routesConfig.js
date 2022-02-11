const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const agencyController = require("../controllers/agencyController");

module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/agency", agencyController);
};

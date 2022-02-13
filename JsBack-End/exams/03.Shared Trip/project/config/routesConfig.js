const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const tripController = require("../controllers/tripController");

module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/trip", tripController);
};

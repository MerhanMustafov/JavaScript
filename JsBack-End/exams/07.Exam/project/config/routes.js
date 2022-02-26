const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const addController = require("../controllers/addController");
const notFoundController = require("../controllers/notFound");
module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/add", addController);
	app.use("*", notFoundController);
};

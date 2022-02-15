const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const courseController = require("../controllers/courseController");
module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/course", courseController);
};

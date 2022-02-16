const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const playController = require("../controllers/playController");
module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/play", playController);
};

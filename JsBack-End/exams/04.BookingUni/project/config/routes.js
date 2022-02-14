const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const hotelController = require("../controllers/hotelController");
module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/hotel", hotelController);
};

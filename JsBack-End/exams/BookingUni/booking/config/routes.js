const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const hotelController = require("../controllers/hotelController");

module.exports = (app) => {
	app.use("/", homeController);
	app.use("/auth", authController);
	app.use("/hotels", hotelController);
	app.get("*", async (req, res) => {
		res.send("<h1>/404</h1>");
	});
};

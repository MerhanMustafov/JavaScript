const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const postController = require("../controllers/postController");
const notFoundController = require("../controllers/notFound");

module.exports = (app) => {
	app.use("/", homeController);
	app.use("/user", userController);
	app.use("/posts", postController);
	app.use("*", notFoundController);
};

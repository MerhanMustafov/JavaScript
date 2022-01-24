const homeController = require("../controllers/home");
const loginController = require("../controllers/user/login");
const registercontroller = require("../controllers/user/register");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/login", loginController);
  app.use("/register", registercontroller);
};

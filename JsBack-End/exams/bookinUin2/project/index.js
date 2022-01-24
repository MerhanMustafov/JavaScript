const express = require("express");

const databaseConfig = require("./config/database");
const expressConfig = require("./config/express");
const routesConfig = require("./config/routes");

start();
async function start() {
  const port = 3000;
  const app = express();

  await databaseConfig();
  expressConfig(app);
  routesConfig(app);

  app.listen(port, () => console.log("App is listening on port: " + port));
}

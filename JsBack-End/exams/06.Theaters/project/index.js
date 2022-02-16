const express = require("express");
const { PORT } = require("./config");
const dbConfig = require("./config/dbConfig");
const expressConfig = require("./config/expressConfig");
const routes = require("./config/routes");
start();
async function start() {
	const app = express();

	await dbConfig(app);
	expressConfig(app);
	routes(app);
	app.listen(PORT, () => console.log(`Server on: http://localhost:${PORT}`));
}

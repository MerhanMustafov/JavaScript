const express = require("express");
const { PORT } = require("./config");
const dbConfig = require("./config/dbConfig");
const expressConfig = require("./config/expressConfig");

run();
async function run() {
	const app = express();

	await dbConfig();
	expressConfig(app);

	app.listen(PORT, () => {
		console.log(`App is on http://localehost:${PORT}`);
	});
}

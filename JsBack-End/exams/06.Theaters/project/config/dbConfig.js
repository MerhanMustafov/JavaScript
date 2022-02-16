const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = require("./");
module.exports = (app) => {
	return new Promise((resolve, reject) => {
		mongoose.connect(DB_CONNECTION_STRING, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		const db = mongoose.connection;
		db.on("error", (err) => {
			console.log("Database Error: ", err.message);
			reject();
		});
		db.once("open", () => {
			console.log("DB connected: ", DB_CONNECTION_STRING);
			resolve();
		});
	});
};

const mongoose = require("mongoose");
const { CONNECTION_STR } = require(".");

module.exports = (app) => {
	return new Promise((resolve, reject) => {
		mongoose.connect(CONNECTION_STR, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const db = mongoose.connection;
		db.on("error", (err) => {
			console.log("DB error occured: ", err.message);
			reject();
		});
		db.once("open", () => {
			console.log(`DB connection successful: ${CONNECTION_STR}`);
			resolve();
		});
	});
};

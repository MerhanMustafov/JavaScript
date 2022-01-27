const mongoose = require("mongoose");
const connectionStr = `mongodb://localhost:27017/booking`;

module.exports = () => {
	return new Promise((resolve, reject) => {
		mongoose.connect(connectionStr, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		const db = mongoose.connection;
		db.on("error", (err) => {
			console.log("database error: " + err.message);
			reject(err.message);
		});
		db.on("open", () => {
			console.log("Database connected");
			resolve();
		});
	});
};

const { Schema, model } = require("mongoose");

const add = new Schema({
	headline: { type: String, required: [true, "title is required !"] },
	location: {
		type: String,
		required: true,
	},
	companyName: { type: String, required: true },
	companyDescription: { type: String, required: true },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	usersApplied: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = model("Add", add);

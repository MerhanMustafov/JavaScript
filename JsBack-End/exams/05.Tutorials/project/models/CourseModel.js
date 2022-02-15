const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String, required: true },
	duration: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	enrolledUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
	creator: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Course", courseSchema);
// •	Title - string (required), unique
// •	Description - string (required), max length of 50 symbols,
// •	Image Url - string (required),
// •	Duration – string (required),
// •	Created at – Date or String, (required),
// •	Users Enrolled - a collection of Users

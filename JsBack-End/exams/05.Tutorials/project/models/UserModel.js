const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	username: { type: String, required: true },
	hashedPassword: { type: String, required: true },
	enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});
module.exports = model("User", userSchema);
// •	Username - string (required), unique
// •	Password - string (required)
// •	Enrolled Courses - a collection of Courses

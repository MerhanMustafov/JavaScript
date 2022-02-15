const User = require("../models/UserModel");

async function createUser(userData) {
	const user = await new User(userData);
	await user.save();
	return user;
}

async function getUserByUsername(username) {
	const pattern = new RegExp(`^${username}$`, "i");
	const user = await User.findOne({ username: { $regex: pattern } });
	return user;
}

async function enrollCourse(userId, courseId) {
	const user = await User.findById(userId);
	await user.enrolledCourses.push(courseId);
	user.save();
}
module.exports = {
	createUser,
	getUserByUsername,
	enrollCourse,
};

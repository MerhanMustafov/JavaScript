const User = require("../models/UserModel");

async function createUser(userData) {
	const user = new User(userData);
	await user.save();
	return user;
}
async function addPostToUser(authorId, postId) {
	const user = await User.findById(authorId);
	user.userPosts.push(postId);
	await user.save();
}
async function getUserByFullName(firstName, lastName) {
	const patternFirstName = new RegExp(`^${firstName}$`, "i");
	const patternLastName = new RegExp(`^${lastName}$`, "i");
	const foundUser = await User.findOne({
		name: { $regex: patternFirstName },
		surname: { $regex: patternLastName },
	}).lean();

	return foundUser;
}

async function getUserByEmail(email) {
	const pattern = new RegExp(`^${email}$`, "i");
	const foundUser = await User.findOne({ email: { $regex: pattern } }).lean();

	return foundUser;
}

module.exports = {
	createUser,
	getUserByFullName,
	getUserByEmail,
	addPostToUser,
};

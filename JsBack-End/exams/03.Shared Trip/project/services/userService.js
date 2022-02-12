const User = require("../models/UserModel");

async function createUser(userData) {
	const user = await new User(userData);
	await user.save();
	return user;
}

async function getUserByEmail(email) {
	const user = await User.findOne({ email: email }).lean();
	return user;
}

module.exports = {
	createUser,
	getUserByEmail,
};

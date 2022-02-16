const User = require("../models/UserModel");

async function createUser(userData) {
	const user = await new User(userData);
	await user.save();
	return user;
}

async function getUserByUserName(username) {
	const pattern = new RegExp(`^${username}$`, "i");
	const user = await User.findOne({ username: { $regex: pattern } });
	return user;
}

module.exports = {
	createUser,
	getUserByUserName,
};

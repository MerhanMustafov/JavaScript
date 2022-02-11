const User = require("../models/User");

async function createUser(userData) {
	const existing = await User.findOne({ name: userData.name });
	if (existing) {
		throw new Error("Username is taken!");
	}
	const user = await new User(userData);
	await user.save();
	return user;
}

async function getUserByName(name) {
	const pattern = new RegExp(`^${name}$`, "i");
	const existing = await User.findOne({ username: pattern }).lean();
	return existing;
}
module.exports = {
	createUser,
	getUserByName,
};

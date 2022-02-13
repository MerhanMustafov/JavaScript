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

async function getUserById(id) {
	const user = await User.findById(id).populate("tripsHistory").lean();
	return user;
}

// async function addTripHistory(tripId, userId){
// 	const user = await User.findById(userId);
// 	user.tripsHistory.push(tripId);

// }

module.exports = {
	createUser,
	getUserByEmail,
	getUserById,
};

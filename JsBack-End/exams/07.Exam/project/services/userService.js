const User = require("../models/UserModel");

async function createUser(userData) {
	const user = await new User(userData);
	await user.save();
	return user;
}
async function addToMyAdds(addId, userId) {
	const user = await User.findById(userId);
	user.myAdds.push(addId);
	await user.save();
}
async function getUserByEmail(email) {
	const pattern = new RegExp(`^${email}$`, "i");
	const user = await User.findOne({ email: { $regex: pattern } });
	return user;
}

module.exports = {
	createUser,
	getUserByEmail,
	addToMyAdds,
};

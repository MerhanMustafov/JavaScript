const User = require("../models/userModel");

async function createUser(userD) {
	const user = new User({ userD });
	await user.save();
	return user;
}

async function findUserByEmail(email) {
	const pattern = new RegExp(`^${email}$`, "i");
	const foundUser = await User.findOne({ email: { $regex: pattern } }).lean();
	return foundUser;
}

async function findUserByFullName(fName, lName) {
	const pattertFirstName = new RegExp(`^${fName}$`, "i");
	const patternLastName = new RegExp(`^${lName}$`, "i");

	const foundUser = await User.findOne({
		firstName: { $regex: pattertFirstName },
		lastName: { $regex: patternLastName },
	}).lean();
	return foundUser;
}

module.exports = {
	createUser,
	findUserByEmail,
	findUserByFullName,
};

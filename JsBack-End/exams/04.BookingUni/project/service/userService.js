const User = require("../models/UserModel");

async function createUser(userData) {
	const user = await new User(userData);
	await user.save();
	return user;
}

async function getUserById(id) {
	const user = await User.findById(id).populate("bookedHotels").lean();
	return user;
}

async function getUserByEmail(email) {
	const pattern = new RegExp(`^${email}$`, "i");
	const user = await User.findOne({ email: { $regex: pattern } });
	return user;
}

async function addHotel(hotelId, userId) {
	const user = await User.findById(userId);
	user.bookedHotels.push(hotelId);
	await user.save();
}
module.exports = {
	createUser,
	getUserByEmail,
	addHotel,
	getUserById,
};

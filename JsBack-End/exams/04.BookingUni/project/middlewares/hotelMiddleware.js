const hotelService = require("../service/hotelService");
const { addHotel, getUserById } = require("../service/userService");
module.exports = () => (req, res, next) => {
	req.storage = {
		...hotelService,
		addHotel,
		getUserById,
	};
	next();
};

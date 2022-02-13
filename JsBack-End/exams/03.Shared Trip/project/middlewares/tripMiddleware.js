const tripService = require("../services/tripService");
const { getUserById } = require("../services/userService");
module.exports = () => (req, res, next) => {
	req.storage = {
		...tripService,
		getUserById,
	};
	next();
};

const courseService = require("../services/courseService");
const { enrollCourse } = require("../services/userService");

module.exports = () => (req, res, next) => {
	req.storage = {
		...courseService,
		enrollCourse,
	};
	next();
};

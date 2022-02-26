const addService = require("../services/addService");
const { addToMyAdds } = require("../services/userService");

module.exports = () => (req, res, next) => {
	req.storage = {
		...addService,
		addToMyAdds,
	};
	next();
};

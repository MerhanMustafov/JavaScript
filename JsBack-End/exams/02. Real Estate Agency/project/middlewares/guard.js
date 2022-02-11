function isGuest() {
	return (req, res, next) => {
		const guest = !req.user;
		if (guest) {
			next();
		} else {
			res.render("404.hbs");
		}
	};
}

function isUser() {
	return (req, res, next) => {
		const user = req.user;
		if (user) {
			next();
		} else {
			res.render("404.hbs");
		}
	};
}

module.exports = {
	isGuest,
	isUser,
};

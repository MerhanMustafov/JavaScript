function isGuest() {
	return (req, res, next) => {
		if (!req.user) {
			next();
		} else {
			res.redirect("/");
		}
	};
}
function isUser() {
	return (req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.redirect("/");
		}
	};
}

module.exports = {
	isGuest,
	isUser,
};

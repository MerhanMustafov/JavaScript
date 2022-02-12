function isUser() {
	return (req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.redirect("/");
		}
	};
}

function isGuest() {
	return (req, res, next) => {
		if (req.user) {
			res.redirect("/");
		} else {
			next();
		}
	};
}

module.exports = {
	isGuest,
	isUser,
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");
const { COOKIE_NAME, TOKEN_SECRET } = require("../config");

module.exports = () => (req, res, next) => {
	if (tokenParser(req, res)) {
		req.auth = {
			async register(userData) {
				const token = await register(userData);
				res.cookie(COOKIE_NAME, token);
			},
			async login(userData) {
				const token = await login(userData);
				res.cookie(COOKIE_NAME, token);
			},
			async logout() {
				res.clearCookie(COOKIE_NAME);
			},
		};
		next();
	}
};

async function register(userData) {
	const existing = await userService.getUserByEmail(userData.email);
	if (existing) {
		throw new Error("Email is taken !");
	}

	const hashedPassword = await bcrypt.hash(userData.password, 10);
	const user = {
		email: userData.email,
		hashedPassword: hashedPassword,
		description: userData.description,
		myAdds: [],
	};
	const userD = await userService.createUser(user);
	return generateToken(userD);
}

async function login(userData) {
	const existing = await userService.getUserByEmail(userData.email);
	if (!existing) {
		throw new Error("Such user does not exist, please register !");
	}

	const hasMatched = await bcrypt.compare(
		userData.password,
		existing.hashedPassword
	);

	if (!hasMatched) {
		throw new Error("incorrect password !");
	}

	return generateToken(existing);
}

function generateToken(userData) {
	return jwt.sign(
		{
			_id: userData._id,
			username: userData.username,
			hashedPassword: userData.hashedPassword,
		},
		TOKEN_SECRET
	);
}

function tokenParser(req, res) {
	const token = req.cookies[COOKIE_NAME];
	if (token) {
		try {
			const userData = jwt.verify(token, TOKEN_SECRET);
			req.user = userData;
			res.locals.user = userData;
		} catch (err) {
			res.clearCookie(COOKIE_NAME);
			res.redirect("/");
			return false;
		}
	}
	return true;
}

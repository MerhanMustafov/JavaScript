const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../services/userService");
const { COOKIE_NAME, TOKEN_SECRET } = require("../config");

module.exports = () => async (req, res, next) => {
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
	const existing = await userService.getUserByName(userData.name);
	if (existing) {
		throw new Error("User is taken!");
	}
	const hashedPassword = await bcrypt.hash(userData.password, 10);
	const user = {
		name: userData.name,
		username: userData.username,
		heshedPassword: hashedPassword,
	};

	const userD = await userService.createUser(user);
	return generateToken(userD);
}
async function login(userData) {
	const existing = await userService.getUserByName(userData.username);
	if (!existing) {
		throw new Error("There is no such user!");
	}

	const hasMatch = await bcrypt.compare(
		userData.password,
		existing.heshedPassword
	);
	if (!hasMatch) {
		throw new Error("passwords don't match");
	}
	const userD = {
		_id: existing._id,
		name: existing.name,
		username: existing.username,
		heshedPassword: existing.hashedPassword,
	};
	return generateToken(userD);
}

async function generateToken(userData) {
	return jwt.sign(
		{
			_id: userData._id,
			name: userData.name,
			username: userData.username,
			heshedPassword: userData.heshedPassword,
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

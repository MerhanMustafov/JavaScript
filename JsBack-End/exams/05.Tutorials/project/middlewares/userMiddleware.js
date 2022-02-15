const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { COOKIE_NAME, TOKEN_SECRET } = require("../config");
const userService = require("../services/userService");

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
	const exist = await userService.getUserByUsername(userData.username);
	if (exist) {
		throw new Error("username is taken !");
	}

	const hashedPassword = await bcrypt.hash(userData.password, 10);

	const user = {
		username: userData.username,
		hashedPassword: hashedPassword,
		// Course
		enrolledCourses: [],
	};
	const userD = await userService.createUser(user);
	return generateToken(userD);
}

async function login(userData) {
	const exist = await userService.getUserByUsername(userData.username);
	if (!exist) {
		throw new Error("there is no such user please register!");
	}

	const hasMatched = await bcrypt.compare(
		userData.password,
		exist.hashedPassword
	);
	if (!hasMatched) {
		throw new Error("incorrect password !");
	}

	const userD = {
		_id: exist._id,
		username: exist.username,
		hashedPassword: exist.hashedPassword,
	};
	return generateToken(userD);
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
		}
	}
	return true;
}

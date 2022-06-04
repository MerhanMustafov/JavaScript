const userService = require("../services/userS");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { TOKEN_SECRET, COOKIE_NAME } = require("../config");

module.exports = () => (req, res, next) => {
	if (parseToken(req, res)) {
		req.auth = {
			async logout() {
				res.clearCookie(COOKIE_NAME);
			},
			async register(userD) {
				const token = await register(userD);
				res.cookie(COOKIE_NAME, token);
			},
			async login(userD) {
				const token = login(userD);
				res.cookie(token, COOKIE_NAME);
			},
		};
	}
	next();
};

async function register(userD) {
	const existingFullName = await userService.findUserByFullName(
		userD.firstName,
		userD.lastName
	);

	const existingEmail = await userService.findUserByEmail(userD.email);

	if (existingFullName || existingEmail) {
		throw new Error("User already exists");
	}

	const hashedPass = await bcrypt.hash(userD.password, 10);
	const user = {
		firstName: userD.firstName,
		lastName: userD.lastName,
		email: userD.email,
		hashedPass: hashedPass,
		userPosts: [],
	};
	const createdUser = await userService.createUser(user);
	return generateToken(createdUser);
}

async function login(userD) {
	const existingUser = await userService.findUserByEmail(userD.email);
	if (!existingUser) {
		throw new Error("There is no such user!");
	}
	const hasMatched = await bcrypt.compare(
		userD.password,
		existingUser.hashedPass
	);
	if (!hasMatched) {
		throw new Error("Wrong password!");
	}

	return generateToken(existingUser);
}

function generateToken(userD) {
	return jwt.sign(
		{
			_id: userD._id,
			firstName: userD.firstName,
			lastName: userD.lastName,
			email: userD.email,
			userPosts: userD.userPosts,
		},
		TOKEN_SECRET
	);
}

function parseToken(req, res) {
	const token = req.cookies[COOKIE_NAME];
	if (token) {
		try {
			const userD = jwt.verify(token, TOKEN_SECRET);
			req.user = userD;
			res.locals.user = userD;
		} catch (err) {
			res.clearCookie(COOKIE_NAME);
			res.redirect("/");
			return false;
		}
	}
	return true;
}

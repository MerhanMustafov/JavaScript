const userService = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET, COOKIE_NAME } = require("../config");

module.exports = () => (req, res, next) => {
	if (parseToken(req, res)) {
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
	const existingFullName = await userService.getUserByFullName(
		userData.firstName,
		userData.lastName
	);
	const existingEmail = await userService.getUserByEmail(userData.email);
	if (existingFullName) {
		throw new Error("User with that name already exists");
	}
	if (existingEmail) {
		throw new Error("User with that email already exists");
	}
	const hashedPassword = await bcrypt.hash(userData.password, 10);
	const user = {
		name: userData.firstName,
		surname: userData.lastName,
		email: userData.email,
		hashedPassword: hashedPassword,
		userPosts: [],
	};
	const foundUser = await userService.createUser(user);

	return generateToken(foundUser);
}

async function login(userData) {
	const foundUser = await userService.getUserByEmail(userData.email);

	if (!foundUser) {
		throw new Error("There is no user with such email");
	}
	const hasMatched = await bcrypt.compare(
		userData.password,
		foundUser.hashedPassword
	);
	if (!hasMatched) {
		throw new Error("Invalid password!");
	}
	return generateToken(foundUser);
}

function generateToken(userData) {
	return jwt.sign(
		{
			_id: userData._id,
			firstName: userData.name,
			lastName: userData.surname,
			email: userData.email,
			userPosts: userData.userPosts,
		},
		TOKEN_SECRET
	);
}
// if that is async function you should await it in the place you are using it like this
//  await res.locals.user or await res.user...
//So better do not use async here
function parseToken(req, res) {
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

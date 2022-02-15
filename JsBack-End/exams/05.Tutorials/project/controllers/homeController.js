const route = require("express").Router();
const { isUser, isGuest } = require("../middlewares/guard");
route.get("/", async (req, res) => {
	const courses = await req.storage.getAllCourses();
	courses.forEach((c) => (c.enroll = c.enrolledUsers.length));
	courses.forEach((c) => (c.user = req.user));
	if (req.user) {
		res.render("home pages/user-home.hbs", { courses });
	} else {
		res.render("home pages/guest-home.hbs", { courses });
	}
});

module.exports = route;

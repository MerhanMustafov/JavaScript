const route = require("express").Router();
const { isGuest, isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/search", async (req, res) => {
	const search = req.query.word;
	const courses = await req.storage.searchByWord(search);
	res.render("home pages/user-home.hbs", { courses, search });
});

route.get("/delete/:id", isUser(), async (req, res) => {
	const courseId = req.params.id;
	await req.storage.deleteCourse(courseId);
	res.redirect("/");
});

route.post(
	"/edit/:id",
	isUser(),
	body("title")
		.isLength({ min: 4 })
		.withMessage("title should be at least 4 characters long !"),
	body("description")
		.isLength({ min: 20 })
		.withMessage("description should be at least 20 characters long !"),
	body("imageUrl").custom((value) => {
		const pattern = new RegExp(`^https?`, "i");
		if (!pattern.test(value)) {
			throw new Error("image url should start with http or https");
		}
		return true;
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const courseData = {
				title: req.body.title,
				description: req.body.description,
				imageUrl: req.body.imageUrl,
				duration: req.body.duration,
			};
			const courseId = req.params.id;
			await req.storage.editCourse(courseId, courseData);
			res.redirect(`/course/details/${courseId}`);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				courseData: {
					_id: req.params.id,
					title: req.body.title,
					description: req.body.description,
					imageUrl: req.body.imageUrl,
					duration: req.body.duration,
				},
			};
			res.render("course pages/edit-course.hbs", ctx);
		}
	}
);

route.get("/edit/:id", isUser(), async (req, res) => {
	const courseId = req.params.id;
	const courseData = await req.storage.getCourseById(courseId);
	res.render("course pages/edit-course.hbs", { courseData });
});

route.get("/create", isUser(), async (req, res) => {
	res.render("course pages/create-course.hbs");
});

route.get("/enroll/:id", isUser(), async (req, res) => {
	const courseId = req.params.id;
	const userId = req.user._id;
	await req.storage.enrollCourse(userId, courseId);
	await req.storage.enrollUser(userId, courseId);
	res.redirect(`/course/details/${courseId}`);
});
route.get("/details/:id", isUser(), async (req, res) => {
	const course = await req.storage.getCourseById(req.params.id);
	course.isEnroll =
		req.user &&
		course.enrolledUsers.filter((user) => user._id == req.user._id);
	course.isCreator = req.user && course.creator._id == req.user._id;
	res.render("course pages/course-details.hbs", course);
});
route.post(
	"/create",
	isUser(),
	body("title")
		.isLength({ min: 4 })
		.withMessage("title should be at least 4 characters long !"),
	body("description")
		.isLength({ min: 20 })
		.withMessage("description should be at least 20 characters long !"),
	body("imageUrl").custom((value) => {
		const pattern = new RegExp(`^https?`, "i");
		if (!pattern.test(value)) {
			throw new Error("image url should start with http or https");
		}
		return true;
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const courseData = {
				title: req.body.title,
				description: req.body.description,
				imageUrl: req.body.imageUrl,
				duration: req.body.duration,
				enrolledUsers: [],
				creator: req.user._id,
			};
			await req.storage.createCourse(courseData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				courseData: {
					title: req.body.title,
					description: req.body.description,
					imageUrl: req.body.imageUrl,
					duration: req.body.duration,
				},
			};
			res.render("course pages/create-course.hbs", ctx);
		}
	}
);

module.exports = route;

// •	The title should be at least 4 characters
// •	The description should be at least 20 characters long
// •	The imageUrl should starts with http or https

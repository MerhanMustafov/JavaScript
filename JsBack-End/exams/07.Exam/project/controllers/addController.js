const route = require("express").Router();
const { isGuest, isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/search", async (req, res) => {
	res.render("search.hbs");
});
route.get("/searchByEmail", async (req, res) => {
	const search = req.query.searchedEmail;
	const add = await req.storage.searchAddByEmail(search);
	const isMatch = add.length > 0 ? true : false;

	res.render("search.hbs", { add, isMatch, search });
});

route.get("/apply/:id", isUser(), async (req, res) => {
	const addId = req.params.id;
	const userId = req.user._id;
	await req.storage.addToUsersApplied(addId, userId);
	res.redirect(`/add/details/${addId}`);
});

route.get(`/all`, async (req, res) => {
	const adds = await req.storage.getAll();
	res.render("all-ads.hbs", { adds });
});

route.post(
	"/edit/:id",
	isUser(),
	body("headline")
		.isLength({ min: 4 })
		.withMessage("headline should be minimum 4 characters long !"),
	body("location").isLength({ min: 8 }),
	body("companyName")
		.isLength({ min: 3 })
		.withMessage("Company Name should ne at least 3 characters long !"),
	body("companyDescription")
		.isLength({ max: 40 })
		.withMessage("description should be maxsimum 40 chcaracters long !"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const addData = {
				headline: req.body.headline,
				location: req.body.location,
				companyName: req.body.companyName,
				companyDescription: req.body.companyDescription,
				author: req.user._id,
				usersApplied: [],
			};
			await req.storage.editAdd(req.params.id, addData);
			res.redirect(`/add/details/${req.params.id}`);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				addData: {
					_id: req.params.id,
					headline: req.body.headline,
					location: req.body.location,
					companyName: req.body.companyName,
					companyDescription: req.body.companyDescription,
				},
			};
			res.render("edit", ctx);
		}
	}
);

route.get("/edit/:id", isUser(), async (req, res) => {
	const addId = req.params.id;
	const addData = await req.storage.getAddById(addId);
	res.render("edit.hbs", { addData });
});

route.get("/delete/:id", isUser(), async (req, res) => {
	const addId = req.params.id;
	await req.storage.deleteAdd(addId);
	res.redirect("/add/all");
});

route.get("/create", isUser(), async (req, res) => {
	res.render("create.hbs");
});

route.get("/details/:id", async (req, res) => {
	const addId = req.params.id;
	const add = await req.storage.getAddById(addId);
	add.isAuthor = req.user && req.user._id == add.author._id;
	add.isNotAuthor = req.user && req.user._id == add.author._id ? false : true;

	add.isApplied =
		req.user &&
		add.usersApplied.filter((user) => user._id == req.user._id).length > 0
			? true
			: false;
	add.appliedPeople = add.usersApplied.length;
	add.isCandidates = add.usersApplied.length > 0 ? true : false;
	res.render("details.hbs", add);
});
route.post(
	"/create",
	isUser(),
	body("headline")
		.isLength({ min: 4 })
		.withMessage("headline should be minimum 4 characters long !"),
	body("location").isLength({ min: 8 }),
	body("companyName")
		.isLength({ min: 3 })
		.withMessage("Company Name should ne at least 3 characters long !"),
	body("companyDescription")
		.isLength({ max: 40 })
		.withMessage("description should be maxsimum 40 chcaracters long !"),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const addData = {
				headline: req.body.headline,
				location: req.body.location,
				companyName: req.body.companyName,
				companyDescription: req.body.companyDescription,
				author: req.user._id,
				usersApplied: [],
			};
			const add = await req.storage.createAdd(addData);
			await req.storage.addToMyAdds(add._id, req.user._id);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				addData: {
					headline: req.body.headline,
					location: req.body.location,
					companyName: req.body.companyName,
					companyDescription: req.body.companyDescription,
				},
			};
			res.render("create.hbs", ctx);
		}
	}
);

module.exports = route;

const route = require("express").Router();
const { isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/delete/:id", isUser(), async (req, res) => {
	await req.storage.deleteHouse(req.params.id);
	res.redirect("/agency/forRent");
});
route.get("/search", async (req, res) => {
	// const houses = await req.storage.search(req.search);
	res.render("search.hbs");
});
route.post("/search", async (req, res) => {
	const houses = await req.storage.search(req.body.search);
	res.render("search.hbs", { houses });
});
route.get("/edit/:id", isUser(), async (req, res) => {
	const houses = await req.storage.getHouseById(req.params.id);
	res.render("edit.hbs");
});
route.post(
	"/edit/:id",
	isUser(),
	body("name")
		.isLength({ min: 6 })
		.withMessage("Name must be at least 6 characters long!"),
	body("year").custom((value) => {
		if (value >= 1850 && value <= 2021) {
			return true;
		} else {
			throw new Error("age must be between 1850 and 2021!");
		}
	}),
	body("city")
		.isLength({ min: 4 })
		.withMessage("city must be at least 4 characters long!"),
	body("image").custom((value) => {
		const pattern = new RegExp(`^https?:\/\/`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("image should start with http:// or https://");
		}
	}),
	body("description")
		.isLength({ max: 60 })
		.withMessage("description should be maxsimum 60 characters long!"),
	body("available").custom((value) => {
		if (value >= 0 && value <= 10) {
			return true;
		} else {
			throw new Error(
				"available should be between 0 and 10 positive number!"
			);
		}
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const houseData = {
				name: req.body.name,
				type: req.body.type,
				year: req.body.year,
				city: req.body.city,
				image: req.body.image,
				description: req.body.description,
				available: req.body.available,
			};
			const house = await req.storage.editHouse(req.params.id, houseData);
			res.redirect(`/agency/detail/${req.params.id}`);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				houseData: {
					name: req.body.name,
					type: req.body.type,
					year: req.body.year,
					city: req.body.city,
					image: req.body.image,
					description: req.body.description,
					available: req.body.available,
				},
			};
			res.render("edit.hbs", ctx);
		}
	}
);
route.get("/createOffer", isUser(), async (req, res) => {
	res.render("create.hbs");
});
route.get("/forRent", async (req, res) => {
	const lastThree = await req.storage.getAll();
	res.render("aprt-for-recent.hbs", { lastThree });
});
route.get("/detail/:id", async (req, res) => {
	const houseData = await req.storage.getHouseById(req.params.id);
	houseData.isOwner = req.user && req.user._id == houseData.owner._id;
	houseData.isNotOwner = req.user && req.user._id != houseData.owner._id;
	houseData.isAvailable = req.user && houseData.available > 0;
	console.log(houseData.rented);
	houseData.isRented =
		req.user &&
		houseData.rented.filter((user) => user.name == req.user.name);
	res.render("details.hbs", houseData);
});
route.get("/rentHome/:id", isUser(), async (req, res) => {
	const houseData = await req.storage.getHouseById(
		req.params.id,
		req.user._id,
		true
	);
	res.redirect(`/agency/detail/${req.params.id}`);
});
route.post(
	"/createOffer",
	isUser(),
	body("name")
		.isLength({ min: 6 })
		.withMessage("Name must be at least 6 characters long!"),
	body("year").custom((value) => {
		if (value >= 1850 && value <= 2021) {
			return true;
		} else {
			throw new Error("age must be between 1850 and 2021!");
		}
	}),
	body("city")
		.isLength({ min: 4 })
		.withMessage("city must be at least 4 characters long!"),
	body("image").custom((value) => {
		const pattern = new RegExp(`^https?:\/\/`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("image should start with http:// or https://");
		}
	}),
	body("description")
		.isLength({ max: 60 })
		.withMessage("description should be maxsimum 60 characters long!"),
	body("available").custom((value) => {
		if (value >= 0 && value <= 10) {
			return true;
		} else {
			throw new Error(
				"available should be between 0 and 10 positive number!"
			);
		}
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			console.log(req.user);
			const houseData = {
				name: req.body.name,
				type: req.body.type,
				year: req.body.year,
				city: req.body.city,
				image: req.body.image,
				description: req.body.description,
				available: req.body.available,
				rented: [],
				owner: req.user._id,
			};
			const house = await req.storage.createHouse(houseData);
			res.redirect("/");
			console.log(house);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				houseData: {
					name: req.body.name,
					type: req.body.type,
					year: req.body.year,
					city: req.body.city,
					image: req.body.image,
					description: req.body.description,
				},
			};
			res.render("create", ctx);
		}
	}
);

module.exports = route;

const route = require("express").Router();
const { isUser } = require("../middlewares/guard");
const { body, validationResult } = require("express-validator");

route.get("/create", isUser(), async (req, res) => {
	res.render("trip-create.hbs");
});

route.get("/shared-trips", async (req, res) => {
	const trips = await req.storage.getAllTrips();
	res.render("shared-trips.hbs", { trips });
});
route.get("/join/:id", isUser(), async (req, res) => {
	const trip = await req.storage.joinTrip(req.params.id, req.user._id);
	res.redirect(`/trip/details/${req.params.id}`);
});

route.get("/details/:id", async (req, res) => {
	const trip = await req.storage.getTripById(req.params.id);
	trip.isCreator = req.user && req.user._id == trip.creator._id;
	trip.isAvailableSeats = req.user && trip.seats > 0;
	trip.isJoined =
		req.user && trip.buddies.filter((buddie) => buddie._id == req.user._id);
	trip.joinedBuddies =
		req.user && trip.buddies.length > 0
			? trip.buddies.map((b) => b.email).join(", ")
			: false;
	trip.isNotDriver = req.user && !trip.isCreator && trip.isJoined.length == 0;
	res.render("trip-details.hbs", trip);
});

route.get("/delete/id", isUser(), async (req, res) => {
	await req.storage.deleteTrip(req.params.id);
	res.redirect("/shared-trips");
});

route.get("/edit/:id", isUser(), async (req, res) => {
	const tripData = await req.storage.getTripById(req.params.id);
	res.render("trip-edit.hbs", { tripData });
});

route.post(
	"/edit/:id",
	isUser(),
	body("start")
		.isLength({ min: 4 })
		.withMessage("start point must be at least 4 characters long !"),
	body("end").custom((value) => {
		if (0 <= value <= 4) {
			return true;
		} else {
			throw new Error("end point must be at least 4 characters long !");
		}
	}),
	body("seats")
		.isNumeric({ min: 0, max: 4 })
		.withMessage("Seats must be a number  between 0 and 4 inclusive !"),
	body("description")
		.isLength({ min: 10 })
		.withMessage("description must be minimum 10 characters long !"),
	body("carImage").custom((value) => {
		const pattern = new RegExp(`^https?:\/\/`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("image url should start with http:// or https://");
		}
	}),
	body("carBrand")
		.isLength({ min: 4 })
		.withMessage("carBrand must be min 4 characters long !"),
	body("price").custom((value) => {
		if (1 <= value <= 50) {
			return true;
		} else {
			throw new Error("price must be between 1 and 50 inclusive !");
		}
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const tripData = {
				start: req.body.start,
				end: req.body.end,
				date: req.body.date,
				time: req.body.time,
				carBrand: req.body.carBrand,
				carImage: req.body.carImage,
				seats: req.body.seats,
				price: req.body.price,
				description: req.body.description,
				creator: req.user._id,
				buddies: [],
			};
			const trip = await req.storage.editTrip(req.params.id, tripData);
			res.redirect(`/trip/details/${req.params.id}`);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				tripData: {
					start: req.body.start,
					end: req.body.end,
					date: req.body.date,
					time: req.body.time,
					carBrand: req.body.carBrand,
					carImage: req.body.carImage,
					seats: req.body.seats,
					price: req.body.price,
					description: req.body.description,
				},
			};
			res.render("trip-edit.hbs", ctx);
		}
	}
);

route.post(
	"/create",
	isUser(),
	body("start")
		.isLength({ min: 4 })
		.withMessage("start point must be at least 4 characters long !"),
	body("end").custom((value) => {
		if (0 <= value <= 4) {
			return true;
		} else {
			throw new Error("end point must be at least 4 characters long !");
		}
	}),
	body("seats")
		.isNumeric({ min: 0, max: 4 })
		.withMessage("Seats must be a number  between 0 and 4 inclusive !"),
	body("description")
		.isLength({ min: 10 })
		.withMessage("description must be minimum 10 characters long !"),
	body("carImage").custom((value) => {
		const pattern = new RegExp(`^https?:\/\/`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("image url should start with http:// or https://");
		}
	}),
	body("carBrand")
		.isLength({ min: 4 })
		.withMessage("carBrand must be min 4 characters long !"),
	body("price").custom((value) => {
		if (1 <= value <= 50) {
			return true;
		} else {
			throw new Error("price must be between 1 and 50 inclusive !");
		}
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const tripData = {
				start: req.body.start,
				end: req.body.end,
				date: req.body.date,
				time: req.body.time,
				carBrand: req.body.carBrand,
				carImage: req.body.carImage,
				seats: req.body.seats,
				price: req.body.price,
				description: req.body.description,
				creator: req.user._id,
				buddies: [],
			};
			const trip = await req.storage.createTrip(tripData, req.user._id);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				tripData: {
					start: req.body.start,
					end: req.body.end,
					date: req.body.date,
					time: req.body.time,
					carBrand: req.body.carBrand,
					carImage: req.body.carImage,
					seats: req.body.seats,
					price: req.body.price,
					description: req.body.description,
				},
			};
			res.render("trip-create.hbs", ctx);
		}
	}
);
module.exports = route;

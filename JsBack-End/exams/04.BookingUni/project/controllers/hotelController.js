const route = require("express").Router();
const { body, validationResult } = require("express-validator");
const { isGuest, isUser } = require("../middlewares/guard");
route.get("/booking/create", isUser(), async (req, res) => {
	res.render("booking/create.hbs");
});

route.get("/booking/book/:id", async (req, res) => {
	const hotelId = req.params.id;
	const userId = req.user._id;
	await req.storage.bookHotel(userId, hotelId);
	await req.storage.addHotel(hotelId, userId);
	res.redirect(`/hotel//booking/detail/${hotelId}`);
});

route.get("/booking/delete/:id", isUser(), async (req, res) => {
	await req.storage.deleteById(req.params.id);
	res.redirect("/");
});
route.post(
	"/booking/edit/:id",
	isUser(),
	body("name")
		.isLength({ min: 4 })
		.withMessage("hotel name must be minimum 4 characters long !"),
	body("city")
		.isLength({ min: 3 })
		.withMessage("city must be at least 3 characters long !"),
	body("imageUrl").custom((value) => {
		const pattern = new RegExp(`^https?`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("imageUrl should start with http or https");
		}
	}),
	body("freeRooms").custom((value) => {
		console.log(value);
		console.log(Number(value));
		console.log(1 <= value && value <= 100);
		if (1 <= value && value <= 100) {
			return true;
		} else {
			throw new Error("free rooms should be between 1 - 100");
		}
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const hotelData = {
				name: req.body.name,
				city: req.body.city,
				imageUrl: req.body.imageUrl,
				freeRooms: req.body.freeRooms,
			};
			await req.storage.editHotel(req.params.id, hotelData);
			res.redirect(`/hotel/booking/detail/${req.params.id}`);
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				hotelData: {
					name: req.body.name,
					city: req.body.city,
					imageUrl: req.body.imageUrl,
					freeRooms: req.body.freeRooms,
				},
			};
			res.render("booking/edit.hbs", ctx);
		}
	}
);
route.get("/booking/edit/:id", isUser(), async (req, res) => {
	const hotelData = await req.storage.getHotelById(req.params.id);
	res.render("booking/edit.hbs", { hotelData });
});

route.get("/booking/detail/:id", async (req, res) => {
	const hotel = await req.storage.getHotelById(req.params.id);
	hotel.isBooked =
		req.user &&
		hotel.bookedRooms.filter((user) => user._id == req.user._id);
	hotel.isCreator = req.user && hotel.owner._id == req.user._id;
	res.render("booking/details.hbs", hotel);
});

route.post(
	"/booking/create",
	isUser(),
	body("name")
		.isLength({ min: 4 })
		.withMessage("hotel name must be minimum 4 characters long !"),
	body("city")
		.isLength({ min: 3 })
		.withMessage("city must be at least 3 characters long !"),
	body("imageUrl").custom((value) => {
		const pattern = new RegExp(`^https?`, "i");
		if (pattern.test(value)) {
			return true;
		} else {
			throw new Error("imageUrl should start with http or https");
		}
	}),
	body("freeRooms").custom((value) => {
		console.log(value);
		console.log(Number(value));
		console.log(1 <= value && value <= 100);
		if (1 <= value && value <= 100) {
			return true;
		} else {
			throw new Error("free rooms should be between 1 - 100");
		}
	}),
	async (req, res) => {
		try {
			const result = validationResult(req);
			if (result.errors.length > 0) {
				const message = result.errors.map((e) => e.msg).join("\n");
				throw new Error(message);
			}
			const hotelData = {
				name: req.body.name,
				city: req.body.city,
				imageUrl: req.body.imageUrl,
				freeRooms: req.body.freeRooms,
				bookedRooms: [],
				owner: req.user._id,
			};
			const hotel = await req.storage.createHotel(hotelData);
			res.redirect("/");
		} catch (err) {
			const ctx = {
				errors: err.message.split("\n"),
				hotelData: {
					name: req.body.name,
					city: req.body.city,
					imageUrl: req.body.imageUrl,
					freeRooms: req.body.freeRooms,
				},
			};
			res.render("booking/create", ctx);
		}
	}
);

// •	The name should be at least 4 characters
// •	The city should be at least 3 characters long
// •	The imageUrl should starts with http or https
// •	The number of free rooms should be between 1 and 100

module.exports = route;

const { Schema, model } = require("mongoose");

const schema = new Schema({
	email: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	bookedHotels: [{ type: Schema.Types.ObjectId, ref: "Hotel" }],
	// offeredHotels: {},
});
module.exports = model("User", schema);
// •	Email - string (required), unique,
// •	Username – string (required), unique,
// •	Password - string (required),
// •	Booked hotels - a collection of Hotels the user have booked already,
// •	Offered Hotels – a collection of Hotels the user offers

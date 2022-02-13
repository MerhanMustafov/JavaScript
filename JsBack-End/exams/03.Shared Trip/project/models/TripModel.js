const { Schema, model } = require("mongoose");

const tripSchema = new Schema({
	start: { type: String, required: true },
	end: { type: String, required: true },
	date: { type: String, required: true },
	time: { type: String, required: true },
	carImage: { type: String, required: true },
	carBrand: { type: String, required: true },
	seats: { type: Number, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	creator: { type: Schema.Types.ObjectId, ref: "User" },
	buddies: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
module.exports = model("Trip", tripSchema);
// •	Start Point - string (required),
// •	End Point – string (required),
// •	Date – string (required),
// •	Time – string (required),
// •	Car Image – string (required),
// •	Car Brand – string (required),
// •	Seats – number (required),
// •	Price – number (required),
// •	Description – string (required),
// •	Creator – object Id (reference to the User model),
// •	Buddies – a collection of Users (reference to the User model)
// Note: When a user joined the given trip, a reference to that user is added to that collection (Buddies).
// Implement the entities with the correct data types.

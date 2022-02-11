const { Schema, model } = require("mongoose");

const houseSchema = new Schema({
	name: { type: String, required: [true, "name is required!"] },
	type: { type: String, required: [true, "type is required!"] },
	year: { type: Number, required: [true, "number is required!"] },
	city: { type: String, required: [true, "city is required!"] },
	image: { type: String, required: [true, "image is required!"] },
	description: { type: String, required: [true, "description is required!"] },
	available: {
		type: Number,
		required: [true, "available pieces is required!"],
	},
	rented: [{ type: Schema.Types.ObjectId, ref: "User" }],
	owner: { type: Schema.Types.ObjectId, ref: "User" },
	createdAt: { type: Date, default: Date.now },
});
module.exports = model("House", houseSchema);
// •	Name - string (required),
// •	Type - string (“Apartment”, “Villa”, “House”) required,
// •	Year - number (required),
// •	City – string (required),
// •	Home Image - string (required),
// •	Property Description - string (required),
// •	Available pieces - number(required)
// •	Rented a home - a collection of Users (reference to the User model)
// •	Owner - object Id (reference to the User model)
// Note:  When a user rents a home, their id is added to that collection (Rented a home)
// Implement the entities with the correct data types.

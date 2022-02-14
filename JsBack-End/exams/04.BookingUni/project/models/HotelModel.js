const { Schema, model } = require("mongoose");

const hotelModel = new Schema({
	name: { type: String, required: true },
	city: { type: String, required: true },
	imageUrl: { type: String, required: true },
	freeRooms: { type: Number, required: true },
	bookedRooms: [{ type: Schema.Types.ObjectId, ref: "User" }],
	owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Hotel", hotelModel);
// •	Name - string (required), unique
// •	City - string (required),
// •	Image Url - string (required),
// •	Free Rooms – number (required), must be between 1 and 100,
// •	Users Booked a room - a collection of Users
// •	Owner – string (required)

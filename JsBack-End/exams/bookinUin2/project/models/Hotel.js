const { Schema, model } = require("mongoose");

const schema = new Schema({
	name: { type: String, required: true, unique: true },
	city: { type: String, required: true },
	imageUrl: { type: String, required: true },
	freeRooms: { type: Number, required: true, min: 1, max: 100 },
	bookedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
	owner: { type: String },
});

module.exports = model("Hotel", schema);

// •	Name - string (required), unique
// •	City - string (required),
// •	Image Url - string (required),
// •	Free Rooms – number (required), must be between 1 and 100,
// •	Users Booked a room - a collection of Users
// •	Owner – string (required)

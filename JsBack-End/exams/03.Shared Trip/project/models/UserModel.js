const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	email: { type: String, required: true },
	heshedPassword: { type: String, required: true },
	gender: { type: String, required: true },
	tripsHistory: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
});
module.exports = model("User", userSchema);
// •	Email - string (required),
// •	Password - string (required),
// •	Gender – string (male or female) required ,
// •	Trips History – a collection of Trips (reference to the Trip Model)

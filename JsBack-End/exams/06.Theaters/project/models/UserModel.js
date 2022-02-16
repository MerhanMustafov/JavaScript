const { Schema, model } = require("mongoose");

const user = new Schema({
	username: { type: String, required: [true, "username is required !"] },
	hashedPassword: {
		type: String,
		required: [true, "password is required !"],
	},
	likedPlays: [{ type: Schema.Types.ObjectId, ref: "Play" }],
});
module.exports = model("User", user);
// •	Username - string (required), unique
// •	Password - string (required)
// •	Liked Plays - a collection of Plays

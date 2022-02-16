const { Schema, model } = require("mongoose");

const play = new Schema({
	title: { type: String, required: [true, "title is required !"] },
	description: {
		type: String,
		required: [true, "description is required !"],
	},
	imageUrl: { type: String, required: [true, "title is required !"] },
	isPublic: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now, required: true },
	likedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
	likes: { type: Number, required: true },
	creator: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Play", play);

// •	Title - string (required), unique
// •	Description - string (required), max length of 50 symbols,
// •	Image Url - string (required),
// •	Is Public - boolean, default - false,
// •	Created at – Date or String, required
// •	Users Liked - a collection of Users

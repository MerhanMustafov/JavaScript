const { Schema, model } = require("mongoose");

const playSchema = new Schema({
	title: { type: String, required: [true, "title is required"] },
	description: {
		type: String,
		required: [true, "description is required"],
		maxLength: [50, "description must be less than 50 characters"],
	},
	imageUrl: { type: String, required: [true, "image is required"] },
	isPublic: { type: Boolean, default: false },
	createdAt: { type: Date, default: Date.now },
	userLiked: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
	author: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = model("Play", playSchema);

// •	Title - string (required), unique
// •	Description - string (required), max length of 50 symbols,
// •	Image Url - string (required),
// •	Is Public - boolean, default - false,
// •	Created at – Date or String, required
// •	Users Liked - a collection of Users

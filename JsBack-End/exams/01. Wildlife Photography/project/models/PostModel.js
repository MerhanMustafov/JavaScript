const { Schema, model } = require("mongoose");

const postSchema = new Schema({
	title: { type: String, required: [true, "Title is required!"] },
	keyword: { type: String, required: [true, "Keyword is required!"] },
	location: { type: String, required: [true, "Location is required!"] },
	dataOfCreation: {
		type: String,
		required: [true, "Data of creation is required!"],
	},
	image: { type: String, required: [true, "Image is required!"] },
	description: { type: String, required: [true, "Description is required!"] },
	author: { type: Schema.Types.ObjectId, ref: "User" },
	votes: [{ type: Schema.Types.ObjectId, ref: "User" }],
	postRating: { type: Number, default: 0 },
});

module.exports = model("Post", postSchema);

// •	Title - string (required),
// •	Keyword - string (required),
// •	Location - string (required),
// •	Date of creation - string (required),
// •	Image - string (required),
// •	Description - string (required),
// •	Author - object Id (a reference to the User model),
// •	Votes on post - a collection of Users (a reference to the User model),
// •	Rating of post - number, default value 0
// Note: When a user votes on a given post, their id is added to that collection (Votes on post).
// Rating of post will store the overall rating of votes. The value is changing depending on the type of vote (positive and negative).

const { Schema, model } = require("mongoose");

const userModel = new Schema({
	name: { type: String, required: [true, "First name is required!"] },
	surname: { type: String, required: [true, "Last name is required!"] },
	email: { type: String, required: [true, "Email is required!"] },
	hashedPassword: { type: String, required: [true, "Password is required!"] },
	userPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("User", userModel);

// •	First Name - string (required),
// •	Last Name - string (required),
// •	Email - string (required),
// •	Password - string (required),
// •	My Posts - a collection of Post (a reference to the Post Model)
// Note: When a user creates a new post, a reference to that post is added to that collection (My Posts).

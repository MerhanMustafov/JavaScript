const { Schema, model } = require("mongoose");

const userModel = new Schema({
	firstName: { type: String, required: true },
	lastnName: { type: String, required: true },
	email: { type: String, required: true },
	hashedPass: { type: String, required: true },
	userPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("User", userModel);
// const { Schema, model } = require("mongoose");

// const userModel = new Schema({
// 	firstName: { type: String, required: true },
// 	lastnName: { type: String, required: true },
// 	email: { type: String, required: true },
// 	hashedPass: { type: String, required: true },
// 	userPOsts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
// });

// module.exports = model("User", userModel);

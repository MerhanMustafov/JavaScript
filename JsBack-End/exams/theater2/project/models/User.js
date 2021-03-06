const { Schema, model } = require("mongoose");

//това е схемата/макета на user-а
const userSchema = new Schema({
	username: { type: String, required: true },
	hashedPassword: { type: String, required: true },
	likedPlays: [{ type: Schema.Types.ObjectId, ref: "Play" }],
});

module.exports = model("User", userSchema);

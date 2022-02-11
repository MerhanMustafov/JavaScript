const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	name: { type: String, required: [true, "name is required!"] },
	username: { type: String, required: [true, "userName is required!"] },
	heshedPassword: { type: String, required: [true, "password is required!"] },
});
module.exports = model("User", userSchema);
// •	Name - string (required),
// •	Username - string (required),
// •	Password - string (required)

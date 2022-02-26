const { Schema, model } = require("mongoose");

const user = new Schema({
	email: { type: String, required: [true, "username is required !"] },
	hashedPassword: {
		type: String,
		required: [true, "password is required !"],
	},
	description: { type: String, required: true },
	myAdds: [{ type: Schema.Types.ObjectId, ref: "Add" }],
});
module.exports = model("User", user);

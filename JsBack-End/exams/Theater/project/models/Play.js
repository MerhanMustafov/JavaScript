const { Schema, model } = require("mongoose");

const schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true, maxLength: 50 },
  imageUrl: { type: String, required: true },
  isPublic: { type: Boolean, default: false },
  createdAt: { type: String, required: true },
  createdAt: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = model("Play", schema);

// •	Title - string (required), unique
// •	Description - string (required), max length of 50 symbols,
// •	Image Url - string (required),
// •	Is Public - boolean, default - false,
// •	Created at – Date or String, required
// •	Users Liked - a collection of Users

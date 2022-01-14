const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true, match: /^https?:\/\// },
  description: { type: String, required: true, maxLength: 250 },
});

module.exports = model("Accessory", schema);

/*
•	Id - (ObjectId)
•	Name - (String, required)
•	ImageUrl - (String, required, http/https validation)
•	Description - (String, required, max length validation)
•	Cubes - (ObjectId, ref Cubes Model)

*/

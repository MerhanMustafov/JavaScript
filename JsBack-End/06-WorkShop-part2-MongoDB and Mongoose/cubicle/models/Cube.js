const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxLength: 550 },
  imageUrl: { type: String, required: true, match: /^https?:\/\// },
  difficulty: { type: Number, required: true, min: 1, max: 6 },
  // accessories: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  accessories: [{ type: Schema.Types.ObjectId, ref: "Accessory" }],
});

module.exports = model("Cube", schema);
/**
•	Name - (String, required)
•	Description - (String, required, max length validation)
•	ImageUrl - (String, required, http/https validation)
•	Difficulty Level - (Number, required, min and max valid range)
•	Accessories - (ObjectId, ref Accessories Model)
 
/ */

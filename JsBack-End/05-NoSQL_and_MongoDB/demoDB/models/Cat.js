const mongoose = require("mongoose");

const catShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    enum: {
      values: ["black", "brown"],
      message: "color must be black or brown",
    },
  },
});

const Cat = mongoose.model("Cat", catShema);

module.exports = Cat;

const mongoose = require("mongoose");

const personShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const letter = value.slice(0, 1);
        return letter === letter.toLocaleUpperCase();
      },
      message: "name must begin with capital letter",
    },
  },
  age: {
    type: Number,
    required: true,
    min: [0, "age can not be less than 0"],
  },
  hairColor: {
    type: String,
    required: true,
    enum: {
      values: ["black", "brown"],
      message: "color must be black or brown",
    },
  },
});
personShema.methods.printInfo = function () {
  console.log(`NAME: ${this.name} - AGE: ${this.age}`);
};

const Person = mongoose.model("Person", personShema);

module.exports = Person;

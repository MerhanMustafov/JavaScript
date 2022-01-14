// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const Person = require("./models/Person");
const Cat = require("./models/Cat");

const connectionStr = "mongodb://localhost:27017/testdb";

// const client = new MongoClient(connectionStr, { useUnifiedTopology: true });
start();
async function start() {
  const client = await mongoose.connect(connectionStr, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("DataBase Connected");

  //   await Person.findByIdAndUpdate("61dd4f424c6762836060ac3b", {
  //     $set: { age: 23 },
  //   }),
  //   const person = await Person.findOne({ name: "Peter", age: 15 });
  //   person.age = 33;
  //   await person.save();

  console.log(await Person.countDocuments({ name: "Peter" }));
}

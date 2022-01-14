const mongoose = require("mongoose");

module.exports = (app) => {
  return new Promise((resolve, reject) => {
    const connectionStr = "mongodb://localhost:27017/cubicle";
    mongoose.connect(connectionStr, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    const db = mongoose.connection;
    db.on("error", (err) => {
      console.log("Database error occured: ", err.message);
      reject(err.message);
    });
    db.on("open", () => {
      console.log("Database connected");
      resolve();
    });
  });
};

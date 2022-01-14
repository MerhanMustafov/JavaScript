const fs = require("fs/promises");

console.log("Bfore");
executeAsync();
console.log("After");

async function executeAsync() {
  const data = await fs.readFile("./package.json");

  console.log(data.toString());
}

// const fs = require("fs/promises");

// console.log("Bfore");
// executeAsync();
// console.log("After");

// function executeAsync() {
//   const promiss = fs.readFile("./package.json");
//   promiss.then((data) => {
//     console.log(data.toString());
//   });
// }

// const fs = require("fs");

// console.log("Bfore");
// executeAsync();
// console.log("After");

// function executeAsync() {
//   fs.readFile("./package.json", (err, data) => {
//     console.log(data.toString());
//   });
// }

// console.log("Bfore");
// executeSync();
// console.log("After");

// function executeSync() {
//   const data = fs.readFileSync("./package.json");
//   console.log(data.toString());
// }

// fs.writeFileSync("./copy.json", data.toString());

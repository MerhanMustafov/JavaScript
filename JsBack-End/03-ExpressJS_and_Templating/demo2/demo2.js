const fs = require("fs/promises");

// let data = {};
async function init() {
  let data = await fs.readFile("./data.json");
  return JSON.parse(data);
}

async function getData() {
  console.log(await init());
}
async function create() {
  const obj = { 1: "number one", 2: "number two" };
  fs.writeFile("./data.json", JSON.stringify(obj));
  //>>>> should be fs.writeFile("./data.json", JSON.stringify(obj))
}
create();
getData();

let name = "one";
let name = "two";
name;

console.log(name);
console.log(name);

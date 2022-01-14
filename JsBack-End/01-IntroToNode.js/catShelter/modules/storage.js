const fs = require("fs/promises");

let data = {};

async function init() {
  try {
    data = JSON.parse(await fs.readFile("./modules/data.json"));
  } catch (err) {
    console.log(err);
  }
  return (req, res, next) => {
    req.storage = {
      getAll,
    };
    next();
  };
}

async function getAll() {
  return await data;
}

// start();

async function start() {
  await init();
  console.log(await getAll());
}

module.exports = {
  init,
  getAll,
};

const database = {};

function nextId() {
  return Math.floor(Math.random() * 99999);
}

function addItem(item) {
  database[nextId()] = item;
}

function deleteItem(id) {
  delete database[id];
}

module.exports = {
  addItem,
  deleteItem,
  database,
};

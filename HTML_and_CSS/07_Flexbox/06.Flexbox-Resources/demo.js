const url = `http://localhost:3030/`;
const pattern = new RegExp(`^https?:\/\/`, "i");
console.log(pattern.test(url));

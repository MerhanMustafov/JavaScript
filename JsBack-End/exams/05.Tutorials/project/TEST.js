const string = "abcd";
const string2 = "fasdfasdasd";
const pattern = new RegExp(`^${string}`, "i");

console.log(string.includes("o"));
console.log(pattern.test(string));
console.log(pattern.test(string2));

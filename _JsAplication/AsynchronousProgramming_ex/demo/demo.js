// window.onload = () => {
//   let result = cE(
//     "main",
//     {},
//     cE(
//       "ul",
//       { id: 01 },
//       cE("li", { className: "content" }, "blahh"),
//       cE("li", { className: "content" }, "bimbo"),
//       cE("li", { className: "content" }, "home alone")
//     )
//   );

//   document.querySelector("body").appendChild(result);
// };

// function cE(tagName, atr, ...content) {
//   console.log(tagName);
//   console.log(content);
//   if (Object.keys(atr).length > 0) {
//     console.log(atr);
//   } else {
//     console.log({});
//   }
//   let result = document.createElement(tagName);

//   content.forEach((c) => {
//     if (typeof c == "object") {
//       result.appendChild(c);
//     } else {
//       result.textContent = c;
//     }
//   });

//   console.log(result);
//   return result;
// }

// let str = 'Mozilla'
// let str2 = str.substring(5, -2)
// let str3 = str.slice(2, -2)
// console.log(str)
// console.log(str2)
// console.log(str3)

// let obj = {id: 1, className: 2}
// for (let key in obj){
//     console.log(key)
// }

// let obj1 = {id: 1, className: 2}
// for (let obj of Object.entries(obj1)){
//     console.log(obj[0])
//     console.log(obj[1])
// }

// let obj2 = {}
// for (let [key, value] in obj2){
//     console.log(key)
//     console.log(value)
// }



console.log("&#x2600")
// // const city = {
// //     name: "Targovishte",
// //     population: "35000",
// //     lst: [1, 2, 3]

// // }

// // let cityName = city.name
// // delete city.name
// // console.log(cityName);

// // let newLst = city.lst

// // newLst.push(4, 5)
// // console.log(newLst);
// // console.log(city.lst)

// // let [a, b, c] = city.lst
// // let [d, e, ...f] = city.lst
// // f.splice(0)
// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log("*".repeat(20));
// // console.log(d);
// // console.log(e);
// // console.log(f);

// // let aaa = [1, 5, 8, 10];
// // let [first, sec, ...third] = aaa
// // first = 2
// // console.log(first); 
// // console.log(sec); 
// // console.log(third); 
// // console.log(aaa); 


// // let x = aaa.splice(0, 3)
// // console.log(aaa);
// // console.log(x);

// const myObj = {
//     name: "Merho",
//     age: 23,
//     hair: "brown",
//     type: "long"

// }

// let things = Object.entries(myObj)
// console.log(things);

// // let {age, ...f} = myObj

// function lastK(n, k){

//     let result = [1];

//     for (let i = 1; i < n; i++) {
//         let sum = 0;

//         for (let x = result.length - 1; x > result.length - 1 - k; x--) {
            
//             if (result[x] !== undefined) {
//                 sum += result[x];
//             }
//         }
//         result.push(sum)
//     } 
//     return result;
// }

// console.log(lastK(6, 3));
// console.log(lastK(8, 2));

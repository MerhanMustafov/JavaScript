let numbers = [1, 2, 3, 4, 5]

let [a, ...b] = numbers
while (b.length > 0){
    
    a = b.shift()
 
    console.log(a, b ); 
}



// function first(one){
//     let num = 10
//     return num
// }

// function second(two){
//     let num = 20
//     return num
// }

// function sum(a, b){
//     return a + b 
// }

// let num = sum(first(), second())
// console.log(first);
function area() {
    return Math.abs(this.x * this.y);
};


function vol() {
    return Math.abs(this.x * this.y * this.z);
};


function solve(area, vol, dataAsJSON) {
    const figures= JSON.parse(dataAsJSON)
    
    let result = [];
    for (let figure of figures){
        result.push({
            area: area.call(figure),
            volume: vol.call(figure),
        })
    }
    return result
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ))
 
// const obj = {
//     name: 'Peter',
//     outer() {
//       console.log(this); // Object {name: "Peter"}
//       function inner() { console.log(this); }
//       inner();
//     }
//   }
// obj.outer(); // Window
// // console.log(obj.outer()); // Window
// console.log("*".repeat(20))

// const obj1 = {
//     name: 'Peter',
//     outer() {
//       console.log(this); // Object {name: "Peter"}
//       const inner = () => console.log(this);
//       inner();
//     }
//   }
// obj1.outer(); // Object {name: "Peter"}
  
  
// function greet() {
    
//     console.log(this.name);
    
//   }
  
// let person = { name:'Alex' };
// greet.bind(person); // Alex
  
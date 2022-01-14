// class ClassMates {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   displayInfo() {
//     return this.name + "is " + this.age + " years old!";
//   }
// }

// let classmate = new ClassMates("Mike Will", 15);
// console.log(classmate.displayInfo()); // result: Mike Will is 15 years old!

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  arrow = () => {
    console.log(this.name);
  };

  regular() {
    console.log(this.name);
    console.log(() => {
      console.log(this.name);
    });
  }
}

let arrow = new Person("Arrow", 11);
let regular = new Person("Regular", 11);

arrow.arrow();
regular.regular("Regular");

// function Person() {
//   (this.name = "Jack"),
//     (this.age = 25),
//     (this.sayName = function () {
//       // this is accessible
//       console.log(this.age);

//       function innerFunc() {
//         // this refers to the global object
//         console.log(this.age);
//         console.log(this);
//       }

//       innerFunc();
//     });
// }

// let x = new Person();
// x.sayName();

// function Person() {
//   (this.name = "Jack"),
//     (this.age = 25),
//     (this.sayName = function () {
//       console.log(this.age);
//       let innerFunc = () => {
//         console.log(this.age);
//       };

//       innerFunc();
//     });
// }

// const x = new Person();
// x.sayName();

// // const num = 5;
// // const print1 = () => {
// //   console.log(num);
// // };

// // function print2() {
// //   console.log(num);
// // }

// // print1();
// // print2();

// const car = {
//   brand: "Tesla",
//   price: 50000,
//   model: "Model S",

//   msg: function () {
//     console.log(`Available : ${this.model} for ${this.price}`);
//   },
//   msg2: () => {
//       const model = "BMW"
//       const price = 50000
//     console.log(`Available : ${this.model} for ${price}`);
//   },
// };

// car.msg2();

// console.log(() => 5 + 5);
// function foo() {
//   return 5 + 5;
// }
// console.log(function () {
//   return 5 + 5;
// });

// function outer() {
//   const name = "Peter";
//   function print() {
//     console.log(this);
//   }

//   const pintArrow = () => console.log(this);
//   print();
//   pintArrow();
// }

// outer();

// const myObject = {
//   name: "haha",
//   method: function () {
//     const inner = () => {
//       console.log(this);
//     };
//     inner();
//   },
//   hoo: function () {
//     const inner = function () {
//       console.log(this);
//     };
//     inner();
//   },
// };
// // Method invocation
// myObject.method(); // logs myObject
// myObject.hoo(); // logs myObject

// const randomNum = Math.floor(Math.random() * 9999999);

// function result(num1, num2) {
//   console.log(this);
//   return num1() + num2();
// }

// console.log(
//   result(
//     () => randomNum,
//     () => randomNum
//   )
// );

// const array = [1, 2, 3];
// console.log(array.map((x) => x * 2));

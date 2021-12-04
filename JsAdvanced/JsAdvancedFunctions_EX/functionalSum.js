function add() {
    let sum = 0;
 
    function inner(number) {
        sum += number;
        return inner
        
    }
    inner.toString = function () {
        return sum;
    };
    return inner;
};

// console.log(solve(1)(6)(-3).toString());

// function add(num) {
//     let sum = num;

//     function calc(num2) {
//         sum += num2;
//         return calc;
//     }

//     calc.toString = function() { return sum };
//     return calc;
// }
let inner = add()
console.log(inner(1)(6)(3)(-5).toString());
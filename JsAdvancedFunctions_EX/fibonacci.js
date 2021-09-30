function getFibonator(){
    let num = [0]
    function fib(){
        if (num.length == 1){
            num.push(1)
            return  1
        }
        let nextNum = Number(num[num.length - 1]) + Number(num[num.length - 2])
        num.push(nextNum)
        return nextNum

    
    }
    return fib
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

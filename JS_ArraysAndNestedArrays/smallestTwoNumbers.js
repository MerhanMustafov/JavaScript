function solve(array){
    const smallestTwo = []
    const first = Math.min.apply(Math, array)
    array.splice(array.indexOf(first), 1)
    const second = Math.min.apply(Math, array)
    smallestTwo.push(first, second)
    return smallestTwo.join(" ")
}

console.log(solve([30, 15, 50, 5]))
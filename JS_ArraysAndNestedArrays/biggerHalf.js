function solve(array){
    array.sort((a, b) => a-b)
    const num = Math.floor(array.length/2)
    const biggerHalf = array.splice(num)
    return biggerHalf
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))


// console.log([3, 19, 14, 7, 2, 19, 6].sort((a, b) => a-b))
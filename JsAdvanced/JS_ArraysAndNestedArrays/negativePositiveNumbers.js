function solve(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            let el = array.splice(i, 1)[0]
            array.unshift(el)
        }
    }
    return array.join("\n")
}

// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// let removed = myFish.splice(-1, 1)
// console.log(removed)
console.log(solve([7, -2, 8, 9]))
function solve(array){
    let newArray = []
    while(array.length-1 > 0){
        let currentMin = Math.min.apply(Math, array)
        array.splice(array.indexOf(currentMin), 1)
        let currentMax = Math.max.apply(Math, array)
        array.splice(array.indexOf(currentMax), 1)        
        newArray.push(currentMin, currentMax)
    }
    if (array.length == 1){
        newArray.push(array[0])
    }
    return newArray

   
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18]))

function solve(array){
    let newArray = [];
    let current = newArray[newArray.length - 1];
    for (let i = 0; i < array.length; i++){
        if (i == 0){
            newArray.push(array[i])
        }else {
            if (array[i] >=  newArray[newArray.length - 1]){
                newArray.push(array[i])
            }
        }
    }
    return newArray
}

// console.log(solve([1, 
//     3, 
//     8, 
//     4, 
//     10, 
//     12, 
//     3, 
//     2, 
//     24]
//     ))

// console.log(solve([1, 
//     2, 
//     3,
//     4]
//     ))

// console.log(solve([20, 
//     3, 
//     2, 
//     15,
//     6, 
//     1]
//     ))
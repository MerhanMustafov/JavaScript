function solve(array, step){
    let new_array = []
    for (let i = 0; i < array.length; i+=step){
        new_array.push(array[i])
    }
    return new_array
}   

// console.log(solve(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// ));
// console.log(solve(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// ));
// console.log(solve(['1', 
// '2',
// '3', 
// '4', 
// '5'], 
// 6
// ));

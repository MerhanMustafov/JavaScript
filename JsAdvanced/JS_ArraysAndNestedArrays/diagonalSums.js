function solve(matrix){
    let diagonals = []
    let result_one = 0
    let result_two = 0
    let first_di = 0
    let sec_di = -1
    for (let i = 0; i < matrix.length; i++){
        result_one += matrix[first_di][first_di]
        if (i == 0){
            result_two += Number(matrix[first_di].slice(sec_di))
        } else{
            result_two += Number(matrix[first_di].slice(sec_di, (sec_di + 1)))
        }
        first_di += 1
        sec_di -= 1
    }
    diagonals.push(result_one, result_two)
    return diagonals.join(" ")
}   


// console.log(solve([[20, 40],
//     [10, 60]]
//    ))



// let array = [1, 2, 3, 4]
// console.log(array.slice(-2, (-2 + 1)))
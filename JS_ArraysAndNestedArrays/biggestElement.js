function solve(matrix){
    let biggest_nums = []
    for (let i = 0; i < matrix.length; i ++){
        let biggest_num = Math.max.apply(Math, matrix[i])
        biggest_nums.push(biggest_num)
    }
    return Math.max.apply(Math, biggest_nums)
}


console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ))

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))
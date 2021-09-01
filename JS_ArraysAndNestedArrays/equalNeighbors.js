function solve(matrix){
    let count = 0
    for (let i = 0; i <= matrix.length - 1; i++){
        for (let a = 0; a < matrix[i].length; a++){
            let current = matrix[i][a]
            if (i == 0){
                if (matrix[i][a] == matrix[i+1][a]){
                    count += 1
                }else if (matrix[i][a] == matrix[i][a+1]){
                    count += 1
                }
                
            }else if(i > 0 && i < matrix.length-1){
                if (matrix[i][a] == matrix[i+1][a]){
                    count += 1
                }else if (matrix[i][a] == matrix[i][a+1]){
                    count += 1
                // }else if (matrix[i][a] == matrix[i-1][a]){
                //     count += 1
                // }
                }
            } else if (i == matrix.length-1){
                // if (matrix[i][a] == matrix[i-1][a]){
                //     count += 1
                if (matrix[i][a] == matrix[i][a+1]){
                    count += 1
                }
            }
            
            
        }
    }
    return count
}

console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))

console.log(solve([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]))
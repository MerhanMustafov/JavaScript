function solve(matrix){
    let magicSum = 0
    let sumCol = 0
    let isTrue = true
    for (let row = 0; row < matrix.length; row++){
        let sum = 0
        for (let col = 0; col < matrix[row].length; col++){
            sum += matrix[row][col]
            
        }
        if (row == 0){
            magicSum += sum
        }else if (row > 0){
            if (magicSum !== sum){
                isTrue = false
            }
            
        }

    }
    magicSum = 0
    for (let col = 0; col < matrix[0].length; col++){
        let sum = 0
        for (let row = 0; row < matrix.length; row++){
            sum += matrix[row][col]
            
        }
        if (col === 0){
            magicSum += sum
        }else if (col > 0){
            if (magicSum !== sum){
                isTrue = false
            }
            
        }
    }
    if (isTrue === true){
        return true
    }else{
        return false
    }


}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ))
    
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ))

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ))
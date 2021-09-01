function solve(n, k){
    let result = []
    for (let i = 0; i < n; i++){
        if (i == 0){
            result.push(1)
        }else{
            let num = 0
            let count = 0
            for (let i = result.length - 1; i >= 0; i--) {
                if (count < k){
                    num += result[i]
                    count += 1
                }
            }
            result.push(num)
        }
        

    }
    return result
}

console.log(solve(6, 3))
console.log(solve(8, 2))
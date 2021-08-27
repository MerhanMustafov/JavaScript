function rangeSum(n, m){
    let num1 = Number(n)
    let num2 = Number(m)
    result = 0
    for (let i = num1; i <= num2; i++){
        result += i

    }
    return result
}

// console.log(rangeSum('1', '5'));
// console.log(rangeSum('-8', '20'));
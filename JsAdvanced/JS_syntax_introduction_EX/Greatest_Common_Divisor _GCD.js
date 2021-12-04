function greatest_common_divisor(number_1, number_2){
    let result = []
    let num_1 = null
    let num_2 = null
    if (number_1 <= number_2){
        num_1 = number_1
        num_2 = number_2
    } else {
        num_1 = number_2
        num_2 = number_1
    }
    for (let i = 1; i <= num_1; i++){
        if (num_1 % i == 0 && num_2 % i == 0)
            result.push(i)
        
    }
    return Math.max.apply(Math, result)
}


// console.log(greatest_common_divisor(2154, 458))


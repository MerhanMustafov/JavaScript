function operations(num_1, num_2, string){
    let result;
    switch (string){
        case '+': result = num_1 + num_2;
        break;
        case '-': result = num_1 - num_2;
        break;
        case '*': result = num_1 * num_2;
        break;
        case '/': result = num_1 / num_2;
        break;
        case '%': result = num_1 % num_2;
        break;
        case '**': result = Math.pow(num_1, num_2);
        break;
    
    }
    return result
        
    // if (string == "+"){
    //     result = num_1 + num_2
    // }if (string == "-"){
    //     result = num_1 - num_2
    // }if (string =="*"){
    //     result = num_1 * num_2
    // }if (string == "/"){
    //     result = num_1 / num_2
    // }if (string == "%"){
    //     result = num_1 % num_2
    // }if (string == "**"){
    //     result = Math.pow(num_1, num_2)
    // }
    // return result

}

console.log(operations(5, 6, '+'));
console.log(operations(3, 5.5, '**'))
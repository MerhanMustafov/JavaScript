function solve(num){
    let nums_list = Array.from(String(num), Number)
    let is_all_same = true
    let sum = 0
    
    for (let i = 0; i < nums_list.length; i++){
        if (nums_list[i] != nums_list[i-1] && i > 0)
            is_all_same = false
        sum += nums_list[i]
    }
    console.log(is_all_same)
    console.log(sum)
}

// solve(2222222)
// solve(2222223)
function rectangle(size = 5){
    let result = ''
    for (let i = 0; i < size; i++){
        result += '* '.repeat(size).slice(0, -1) + "\n"
    }
    console.log(result)
}

// rectangle(2)
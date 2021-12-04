function sort(array, str){
    if (str == 'asc'){
        array.sort((a, b) => a-b)
    }else if (str == 'desc'){
        array.sort((a, b) => b-a)
    }
    return array
}

console.log(sort([14, 7, 17, 6, 8], 'asc'))
console.log(sort([14, 7, 17, 6, 8], 'desc'))
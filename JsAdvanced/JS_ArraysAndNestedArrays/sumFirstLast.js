function sumFirstLast(array){
    return Number(array[0]) + Number(array.slice(-1)[0])
}
// console.log(sumFirstLast(['20', '30', '40']))
// console.log(sumFirstLast(['5', '10']))
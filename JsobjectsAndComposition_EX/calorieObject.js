function calorieObj(array){
    const obj = {}
    for (let i = 0; i < array.length; i+= 2){
        let product = array[i]
        let calories = Number(array[i+1])
        obj[product] = calories
    }
    return obj
}
// console.log(calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))
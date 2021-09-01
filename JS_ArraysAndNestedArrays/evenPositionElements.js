function evenPositionElement(array){
    let evenArray = []
    for (let i = 0; i < array.length; i++){
        if (i % 2 == 0){
            evenArray.push(array[i])
        }
    }
    return evenArray.join(" ")
}

// console.log(evenPositionElement(['20', '30', '40', '50', '60']))
// console.log(evenPositionElement(['5', '10']))
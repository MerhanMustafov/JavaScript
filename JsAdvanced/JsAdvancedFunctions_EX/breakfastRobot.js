function solution(){
    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat : 0,
        flavour: 0,
    }
    let recipes  = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20}, 
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1}, 
        turkey: {carbohydrate: 10, protein: 10, fat: 10, flavour: 10} 
    }
   
    return manager

    function manager(data){
        let [command, resMicr, quantity] = data.split(' ')
        quantity = Number(quantity)

        if (command == "restock"){

            microelements[resMicr] += quantity
            return 'Success'

        }else if (command == 'prepare'){

            for (let product in recipes[resMicr]){
                if ((microelements[product] - (recipes[resMicr][product] * quantity)) < 0){
                    return `Error: not enough ${product} in stock`
                }
            }

            for (let product in recipes[resMicr]){
                microelements[product] -= (recipes[resMicr][product] * quantity)
            }

            return 'Success' 

        }else if (command == 'report'){
            let str = ''
            for (let el of Object.keys(microelements)){
                str += `${el}=${microelements[el]} `
            }

            str = str.trim()
            return str
        }
    }
}


let manager = solution (); 
console.log (manager ("restock carbohydrate 10")); // Success 
console.log (manager ("restock flavour 10")); 
console.log (manager ('prepare apple 1')); 
console.log (manager ('restock fat 10')); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 
// ['restock carbohydrate 10', 'Success'],
// ['restock flavour 10', 'Success'],
// ['prepare apple 1', 'Success'],
// ['restock fat 10', 'Success'],
// ['prepare burger 1', 'Success'],
// ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']


// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); 
// console.log (manager ('restock carbohydrate 10')); 
// console.log (manager ('restock flavour 10')); 
// console.log (manager ("prepare apple 1")); 
// console.log (manager ("restock fat 10")); 
// console.log (manager ("prepare burger 1")); 
// console.log (manager ("report")); 

// console.log (manager ("prepare turkey 1")); // Success 
// console.log (manager ("restock protein 10")); 
// console.log (manager ('prepare turkey 1')); 
// console.log (manager ('restock carbohydrate 10')); 
// console.log (manager ("prepare turkey 1")); 
// console.log (manager ("restock fat 10")); 
// console.log (manager ("prepare turkey 1")); 
// console.log (manager ("restock flavour 10")); 
// console.log (manager ("prepare turkey 1")); 
// console.log (manager ("report")); 
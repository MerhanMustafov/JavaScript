function creatCatalogue(productsArray){
    let store = {}
    productsArray.sort((a, b) => a < b ? -1 : 1)
    for (let el of productsArray){
        let [product, price] = el.split(' : ')
        price = Number(price)
        let firstLetter = product[0]
        if (store.hasOwnProperty(firstLetter)){
            store[firstLetter].push({name: product, price: price})
            continue;
        }
        store[firstLetter] = [{name: product, price: price}]
    }
    for (let letter in store){
        console.log(letter)
        for (let el of store[letter]){
            console.log(` ${el.name}: ${el.price}`)
        }
    }
}


console.log(creatCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));
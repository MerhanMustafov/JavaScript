class Restaurant {
    constructor(budget){
        this.budgetMoney = budget//myTotalBudget
        this.menu = {} //meal: {price: 0, neededProducts: [pName pQuantity]}
        this.stockProducts = {}// pName: pQuantity
        this.history = []//massages
    }
    loadProducts(products) {//(array from strings)
        for (let product of products){
            let [pName, pQuantity, pTotalPrice] = product.split(' ')
            pQuantity = Number(pQuantity)
            pTotalPrice = Number(pTotalPrice)            
            if (pTotalPrice <= this.budgetMoney){
                if (!this.stockProducts.hasOwnProperty(pName)){
                    this.stockProducts[pName] = pQuantity
                }else{
                    this.stockProducts[pName] += pQuantity
                }
                this.budgetMoney -= pTotalPrice
                this.history.push(`Successfully loaded ${pQuantity} ${pName}`)
            }else{
                this.history.push(`There was not enough money to load ${pQuantity} ${pName}`)
            }
        }
        return this.history.join('\n')
    }
    
    addToMenu(meal, neededProducts, price){// meal (string), needed products (array from strings) and price (number)
        
        if (!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {'price': price, 'neededProducts': neededProducts}
            let totalMealCount = Object.entries(this.menu).length
            if (totalMealCount == 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }else {
                return `Great idea! Now with the ${meal} we have ${totalMealCount} meals in the menu, other ideas?`
            }   
        }else{
            return `The ${meal} is already in the our menu, try something different.` //the mistake was that i missed "The" at the biginning
        }
    }

    showTheMenu(){
        let currentStateOfMenu = Object.keys(this.menu).length
        if (currentStateOfMenu > 0){
            return Object.entries(this.menu).map(product => `${product[0]} - $ ${product[1]['price']}`).join('\n')
        }else{
            return "Our menu is not ready yet, please come later..."
        }
    }

    makeTheOrder(meal){
        if (!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }else{
            let isEnough = true
            this.menu[meal]['neededProducts'].forEach(product => {
                let [pName, pQuantity] = product.split(' ')
                pQuantity = Number(pQuantity)
                if (!this.stockProducts.hasOwnProperty(pName) || this.stockProducts[pName] - pQuantity < 0){
                    isEnough = false
                    return
                }else{
                    this.stockProducts[pName] -= pQuantity
                }
            })
            if (isEnough){
                this.budgetMoney +=  this.menu[meal]['price']
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`
            }else{
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
            
        }
    }
}


// // input 1
// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// //input 2
// // let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// //input 3
// // let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());
// //input 4
// // let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));

// let test = new Restaurant(1000);
// console.log(test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// console.log(test.budgetMoney)


// !this.stockProducts.hasOwnProperty(pName) || this.stockProducts[pName] - pQuantity < 0 

// // let x = {'b': 2, 'c': 3}
// // console.log(Object.entries(x))
// // console.log(x.hasOwnProperty('b'))

// Array.from(ul.children).sort((a, b) => Number(a.value) - Number(b.value)).forEach(el => ul.appendChild(el))
// Array.from(ul.children).sort((a, b) => Number(a.value) - Number(b.value)).forEach(el => ul.appendChild(el))


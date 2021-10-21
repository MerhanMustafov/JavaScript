class ChristmasDinner {
    constructor(budget){
        this.budget = budget
        this.dishes = []
        this.products = []
        this.guests = {}
    }
    get budget(){
        return this._budget
    }
    set budget(value){
        if (value < 0){
            throw new Error("The budget cannot be a negative number")
        }
        this._budget = value
    }

    shopping(product){
        let productType = product[0]
        let productPrice = Number(product[1])
        if(this.budget - productPrice < 0){
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(productType), this.budget -= productPrice
        return `You have successfully bought ${productType}!`

    }
//{ recipeName: string, productsList: array of strings }
    recipes(recipe){
        let AllAvailable = recipe.productsList.every(product => this.products.includes(product))
        if (AllAvailable){
            let dish = { 'recipeName': recipe.recipeName, 'productsList': recipe.productsList }
            this.dishes.push(dish)
            return `${recipe.recipeName} has been successfully cooked!`
        }else{
            throw new Error("We do not have this product")
        }
    }
// string/string
    inviteGuests(name, dish){
        let isDishPresent = this.dishes.filter(d => d.recipeName == dish)
        let guestPresent = Object.keys(this.guests).includes(name)
        if(isDishPresent.length == 0){
            throw new Error("We do not have this dish")
        }if (guestPresent){
            throw new Error("This guest has already been invited")
        }else{
            this.guests[name] = dish 
            return `You have successfully invited ${name}!`
        }

    }
    showAttendance(){
        let info = []
        Object.keys(this.guests).forEach(g => {
            let dishName = this.guests[g]
            let products = this.dishes.filter(dish => dish.recipeName == dishName)[0].productsList.join(', ')
            info.push(`${g} will eat ${dishName}, which consists of ${products}`)
        })
        return info.join('\n')
    }


}

// let dinner = new ChristmasDinner(300);

// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);

// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());


class Vacationer {
    constructor(fullName, cCard = [1111,``, 111]){
        this.fullName = fullName
        this.idNumber= this.generateIDNumber()
        this.creditCard = cCard //cCards=array of strings-->creditCard details
        this.wishList = []        
    } 
    generateIDNumber () {
        let lastNameLastLetter = this.fullName.lastName[this.fullName.lastName.length-1]
        let strNum =  lastNameLastLetter == 'a' || lastNameLastLetter == 'e' || lastNameLastLetter == 'o' || lastNameLastLetter == 'i' || lastNameLastLetter == 'u' ? 8 : 7
        // let strNum =  (lastNameLastLetter == ('a' || 'e' || 'o' || 'i' || 'u')) ? 8 : 7 //doesn't work whereas the above works
        let result =  String(231 * this.fullName.firstName.charCodeAt(0) + 139 * this.fullName.middleName.length) + strNum
        return result  
    }
    get fullName() {
        return this._fullName
    }
    set fullName(value){
        if (value.length !== 3){
            throw new Error("Name must include first name, middle name and last name")
        
        }
        let regex = new RegExp('^[A-Z][a-z]+[a-z]$')
        let isNamesValid = value.every(n => regex.test(n))
        if (!isNamesValid){
            throw new Error("Invalid full name")
        }
        this._fullName = {
            'firstName': value[0],
            'middleName': value[1],
            'lastName': value[2]
        }
    }
    get creditCard() {
        return this._creditCard
    }
    //set or update this.creditCard details
    set creditCard(value){
        if(value.length < 3){
            throw new Error("Missing credit card information")
        }else if((typeof value[0] !== 'number') || (typeof value[2] !== 'number')){
            throw new Error("Invalid credit card details")
        }
        this._creditCard = {
            'cardNumber': value[0],
            'expirationDate': value[1],
            'securityNumber': value[2],
        } 
    }
    addCreditCardInfo(input) {
        this.creditCard = input //input=array of strings-->creditCard details          
    }
    addDestinationToWishList(destination) {
        let wishListCopy = this.wishList.filter(d => d.toLowerCase() == destination.toLowerCase())
        if(wishListCopy.length >= 1){
            throw new Error("Destination already exists in wishlist")
        }
        this.wishList.push(destination)
        this.wishList.sort((a, b) => a.length - b.length)
    }
    getVacationerInfo(){
        let fullName = Object.keys(this.fullName).map(n => this.fullName[n]).join(' ')
        let wishList = this.wishList.length == 0 ? 'empty' : this.wishList.join(', ')
        let [cardNumber, expirationDate, securityNumber] = Object.keys(this.creditCard).map(c => this.creditCard[c])

        let result = `Name: ${fullName}\nID Number: ${this.idNumber}\nWishlist:\n${wishList}\nCredit Card:\nCard Number: ${cardNumber}\nExpiration Date: ${expirationDate}\nSecurity Number: ${securityNumber}`
        return result
    }
}

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], 
[123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania ", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Balii');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // let lower = 'aAaaaA'
// // if (lower[lower.length-1] == ('a' || 'e' || 'o')){
// //     console.log(lower[lower.length-1])
// // }


// // console.log(lower.charCodeAt(0))
// // console.log(lower[0]==lower[0].toLowerCase())
// // let upper = 'AaAaaa'
// // let upLower = 'Aaaaaaaaaa'
// // let regex = new RegExp('^[A-Z][a-z]+$')
// // console.log(regex.test(lower))
// // console.log(regex.test(upper))
// // console.log(regex.test(upLower))


// let obj = {'a': 1, 'b': 2, 'c': 3}
// console.log(obj)
// let input = [11, 12, 13]
// console.log(input)
// // [obj.a, obj.b, obj.c] = input
// let [a, b, c] = [...input]
// console.log(a)
// console.log(b)
// console.log(c)

// let input = ['a', 'bb', 'ccc', 'dddd']
// input.sort((a, b) => b.length - a.length)
// console.log(input)

// let input = [1, 'a']
// console.log(typeof input[0] == 'number')
// console.log(typeof input[1] == 'number')


// let array = [1, 2]
// let arrayCopy = array.slice(0, )
// arrayCopy[0] = 500
// console.log(array)
// console.log(arrayCopy)

// let negativeNum = -10.1
// console.log(isFloat(negativeNum))

// // console.log(Math.abs(negativeNum))
// // console.log(negativeNum.charCodeAt(0))

// function isFloat(n){
//     return Number(n) === n && n % 1 !== 0;
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
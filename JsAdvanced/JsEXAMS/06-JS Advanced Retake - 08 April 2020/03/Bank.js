class Bank {
    constructor(bankName){
        this._bankName = bankName
        this.allCustomers = []//OBJ s of 
    }                //{firstName, lastName, personalId}
    newCustomer (customer){
        let index = this.allCustomers.findIndex(c => c.personalId == customer.personalId)
        if (index > -1){
            throw new Error(`${customer.firstName} ${ customer.lastName} is already our customer!`)
        }else{
            this.allCustomers.push(customer)
            return customer
        }
    }
    depositMoney (personalId, amount){//Numbers
        let index = this.allCustomers.findIndex(c => c.personalId == personalId)
        if(index == -1){
            throw new Error(`We have no customer with this ID!`)
        }else{
            let customer = this.allCustomers[index]
            customer['totalMoney'] = customer['totalMoney'] ? customer['totalMoney'] += amount :customer['totalMoney'] = amount 

            let fN = customer.firstName
            let lN = customer.lastName
            let trInfo = `${ customer['transactions'].length + 1}. ${fN} ${lN} made deposit of ${amount}$!`
            if (customer['transactions']){
                customer['transactions'].push(trInfo)
            }else{
                customer['transactions'] = []
                customer['transactions'].push(trInfo)
 
            }
            
            return `${customer['totalMoney']}$`
        }
    }
    withdrawMoney (personalId, amount){//Numbers
        let index = this.allCustomers.findIndex(c => c.personalId == personalId)
        if(index == -1){
            throw new Error(`We have no customer with this ID!`)
        }else if(index > -1){
            let customer = this.allCustomers[index]
            if (customer['totalMoney'] - amount >= 0){
                customer['totalMoney'] -= amount
                let fN = customer.firstName
                let lN = customer.lastName
                let trInfo = `${customer['transactions'].length + 1}. ${fN} ${lN} withdrew ${amount}$!`
                if (customer['transactions']){
                    this.allCustomers[index]['transactions'].push(trInfo)
                }else{
                    customer['transactions'] = []
                    customer['transactions'].push(trInfo)
 
                }
                return `${customer['totalMoney']}$`
            }else{
                throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
            }
            
        }
    }
    customerInfo (personalId){
        let index = this.allCustomers.findIndex(c => c.personalId == personalId)
        if(index == -1){
            throw new Error(`We have no customer with this ID!`)
        }else {
            let info = []
            let theCustomer = this.allCustomers.filter(c => c.personalId == personalId)[0]
            theCustomer.transactions.sort((a, b) =>  Number(b.split('. ')[0]) - Number(a.split('. ')[0]))
            info.push(`Bank name: ${this._bankName}`)
            info.push(`Customer name: ${theCustomer.firstName} ${theCustomer.lastName}`)
            info.push(`Customer ID: ${personalId}`)
            info.push(`Total Money: ${theCustomer.totalMoney}$`)
            info.push(`Transactions:`)
            theCustomer.transactions.forEach(c => info.push(c))

            return info.join('\n')
        }
    }

}

// let bank = new Bank(`SoftUni Bank`);

// console.log(bank.newCustomer({firstName: `Svetlin`, lastName: `Nakov`, personalId: 6233267}));
// console.log(bank.newCustomer({firstName: `Mihaela`, lastName:`Mileva`, personalId: 4151596}));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596,555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));

// let array = [1,]
// if (array){
//     console.log('yes')

// }

// let a = array.filter(x => x > 1)[0]
// if (a){
//     console.log('NO')
//     console.log(a)
// }

// let obj = {'a': 1, 'b': 2}
// console.log(obj)
// obj['c'] = obj['c'] ? obj['c'] += 5 : obj['c'] = 10
// console.log(obj)
// obj['c'] = obj['c'] ? obj['c'] += 5 : obj['c'] = 10
// console.log(obj)

//zero test 1
// let Bank = result;
// let name = 'SoftUni Bank';
// let bank = new Bank('SoftUni Bank');


// let customer1 = bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 1111111 });
// // expect(customer1.firstName).to.be.equal('Svetlin');

// let customer2 = bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 3333333 });
// // expect(customer2.lastName).to.be.equal('Mileva');
// // expect(customer2.personalId).to.be.equal(3333333);

// let totalMoney1 = bank.depositMoney(1111111, 250);
// // expect(totalMoney1).to.be.equal('250$', 'Function depositMoney returns incorrect totalMoney');

// let totalMoney2 = bank.depositMoney(1111111, 250);
// // expect(totalMoney2).to.be.equal('500$', 'Function depositMoney returns incorrect totalMoney');

// let totalMoney3 = bank.depositMoney(3333333, 555);
// // expect(totalMoney3).to.be.equal('555$', 'Function depositMoney returns incorrect totalMoney');

// let totalMoney4 = bank.withdrawMoney(1111111, 125);
// // expect(totalMoney4).to.equal('375$', 'Function withdrawMoney returns incorrect totalMoney');

// let output = bank.customerInfo(1111111);
// console.log(output)

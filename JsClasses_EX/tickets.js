function solve(arrayOfStr, str){
    let arrayOfClasses = []
    for (let el of arrayOfStr){
        [destination, price, stat] = el.split('|')
        class Ticket{
            constructor(destination, price, stat){
                this.destination = destination
                this.price = Number(price)
                this.status = stat
            }
        }
        let ticket = new Ticket(destination, price, stat)
        arrayOfClasses.push(ticket)
    }
    if (str !== 'price'){
        arrayOfClasses.sort((a, b) => a[str].localeCompare(b[str]))
    }else{
        arrayOfClasses.sort((a, b) => a.str - b.str)
    }
    
    return arrayOfClasses
}

// console.log(solve(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ))
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))
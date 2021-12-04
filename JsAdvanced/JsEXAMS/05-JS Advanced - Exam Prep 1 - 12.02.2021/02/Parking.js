class Parking {
    constructor(capacity){
        this.capacity = capacity
        this.vehicles = []
    }

    addCar( carModel, carNumber ){
        if (this.capacity == 0){
            throw new Error("Not enough parking space.")
        }
        let car = {carModel, carNumber, 'payed': false}
        this.vehicles.push(car), this.capacity -= 1
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar( carNumber ) {
        let isFound = this.vehicles.filter(car => car.carNumber == carNumber);
        if (isFound.length == 0){
            throw new Error("The car, you're looking for, is not found.")
        }else if(!isFound[0].payed){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }else{
            this.vehicles = this.vehicles.filter(car => car.carNumber !== carNumber)
            this.capacity += 1
            return `${carNumber} left the parking lot.`
        }
    }

    pay( carNumber ) {
        let isFound = this.vehicles.filter(car => car.carNumber == carNumber);
        if(isFound.length == 0){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }else if(isFound[0].payed){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }else {
            isFound[0].payed = true
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }
    getStatistics(carNumber) {
        let info = []
        if (carNumber == undefined){
            info.push(`The Parking Lot has ${ this.capacity } empty spots left.`)
            this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel)).forEach(car => {
                let isPayed = car.payed ? 'Has payed' : 'Not payed'
                info.push(`${car.carModel} == ${car.carNumber} - ${isPayed}`)
            })
        }else {
            
            this.vehicles.filter(car => car.carNumber == carNumber).forEach(car => {
                let isPayed = car.payed ? 'Has payed' : 'Not payed'
                info.push(`${car.carModel} == ${car.carNumber} - ${isPayed}`)
            })
        }
        return info.join('\n')
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

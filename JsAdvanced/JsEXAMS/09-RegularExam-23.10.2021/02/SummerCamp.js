class SummerCamp {
    constructor(organizer, location){
        this.organizer = organizer
        this.location = location
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}
        this.listOfParticipants = []
    }

    registerParticipant (name, condition, money){//str/str/num
        let isPresent = Object.keys(this.priceForTheCamp)
        if(!isPresent.includes(condition)){
            throw new Error("Unsuccessful registration at the camp.")
        }
        let isParticipantPresent = this.listOfParticipants.filter(p => p.name == name)
        if(isParticipantPresent.length > 0){
            return `The ${isParticipantPresent[0].name} is already registered at the camp.`
        }
        if(money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`
        }else{
            let participant = {name, condition, 'power': 100, 'wins': 0} 
            this.listOfParticipants.push(participant)

            return `The ${name} was successfully registered.`
        }

        
    }

    unregisterParticipant (name){//string
        let isParticipantPresent = this.listOfParticipants.filter(p => p.name == name)
        if(isParticipantPresent.length == 0){
            throw new Error(`The ${name} is not registered in the camp.`)
        }else{
            this.listOfParticipants = this.listOfParticipants.filter(p => p.name !== name)
            return `The ${name} removed successfully.`
        }


    }

    timeToPlay (typeOfGame, participant1, participant2){//str/str//str-Optianal
        
        
        if (participant1 && participant2 == undefined){
            let isParticipantPresent1 = this.listOfParticipants.filter(p => p.name == participant1)

            if (typeOfGame == 'Battleship'){
                // let participant = this.listOfParticipants.filter(p => p.name == participant1)
                isParticipantPresent1[0].power += 20
                return `The ${isParticipantPresent1[0].name} successfully completed the game ${typeOfGame}.`
            }
        }
        
        if (participant1 && participant2){
            let isParticipantPresent1 = this.listOfParticipants.filter(p => p.name == participant1)
            let isParticipantPresent2 = this.listOfParticipants.filter(p => p.name == participant2)
            if (isParticipantPresent1.length == 0 || isParticipantPresent2.length == 0){
                throw new Error(`Invalid entered name/s.`)
            }
            if(isParticipantPresent1[0].condition !== isParticipantPresent2[0].condition){
                throw new Error(`Choose players with equal condition.`)
            }
            if (typeOfGame == 'WaterBalloonFights'){
            
                
    
                if(isParticipantPresent1[0].power > isParticipantPresent2[0].power){
                    isParticipantPresent1[0].wins += 1
                    return `The ${isParticipantPresent1[0].name} is winner in the game ${typeOfGame}.`
                }else if (isParticipantPresent2[0].power > isParticipantPresent1[0].power){
                    isParticipantPresent2[0].wins += 1
                    return `The ${isParticipantPresent2[0].name} is winner in the game ${typeOfGame}.`
                }else{
                    return `There is no winner.`
                }
    
            }
        }
        
        
        

    }
    toString () {
        let info = []
        info.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        this.listOfParticipants.sort((a, b) => Number(b.wins) - Number(a.wins)).forEach(p =>{
            info.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`)
        })
        return info.join('\n')
    }
}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());





//colleagues solutions

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = []
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        if (this.listOfParticipants.some(x => x.name === name)) {
            return `The ${name} is already registered at the camp.`
        }
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let current = this.listOfParticipants.findIndex(x => x.name === name)
        if (current === -1) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        this.listOfParticipants.splice(current, 1)
        return `The ${name} removed successfully.`
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let player1 = this.listOfParticipants.find(x => x.name === participant1)
        let player2 = this.listOfParticipants.find(x => x.name === participant2)
        if (player1 === undefined) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (typeOfGame === 'WaterBalloonFights' && player2 === undefined) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (typeOfGame === 'WaterBalloonFights' && (player1.condition !== player2.condition)) {
            throw new Error(`Choose players with equal condition.`)
        }
        if (typeOfGame === "Battleship") {
            player1.power += 20
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
        if (typeOfGame === 'WaterBalloonFights') {
            if (player1.power > player2.power) {
                player1.wins++
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (player1.power < player2.power) {
                player2.wins++
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }
    }

    toString() {
        let result = []
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        for (let el of sorted) {
            result.push(`${el.name} - ${el.condition} - ${el.power} - ${el.wins}`)
        }
        return result.join('\n')
    }
}
*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




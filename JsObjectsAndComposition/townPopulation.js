function register(registerArrey){
    let register = {}
    
    for (let el of registerArrey){
        let [town, population] = el.split(" <-> ")
        population = Number(population)
        if (typeof register[town] !== 'undefined'){
            //(register[town] !== undefined)
            //(!register[town])
            // (register.hasOwnProperty(town))
            // register.town = population
            register[town] += population
            continue;
        }
        register[town] = population
    }
    let result = ""
    for (let el of Object.entries(register)){
        result += `${el[0]} : ${el[1]}` + "\n"
    }
    return result.slice(0, -1)

};

// console.log(register(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// ))

console.log(register(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
));
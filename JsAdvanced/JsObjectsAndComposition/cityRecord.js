function creatCity(name, population, treasury){
    const city = {
        name: name,
        population: population,
        treasury: treasury
    }
    return city
}

console.log(creatCity('Tortuga',7000,15000));
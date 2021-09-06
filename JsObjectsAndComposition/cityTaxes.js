function cityTaxes(name, population, treasury){
    let town = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes(){
            return this.treasury += this.population * this.taxRate
        },
        applyGrowth(percentage){
            return this.population += (this.population * percentage / 100)
        },
        applyRecession(percentage){
            return this.treasury -= (this.treasury * percentage / 100)
        }

    }
    return town

}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);
// console.log(city.collectTaxes)

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);

// const city =
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);


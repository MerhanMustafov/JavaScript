function creatingHeroRegister(heroArray){
    let heroicInventory = []
    for (let i = 0; i< heroArray.length; i++){
        let heroData = heroArray[i].split(' / ');
        let name = heroData[0];
        let level = Number(heroData[1]);
        let items = heroData[2] ? heroData[2].split(', ') :[];
        
        let hero = {
            name: name,
            level: level,
            items: items
        }
        // JSON.stringify(hero)
        heroicInventory.push(hero)
    }
    
    return JSON.stringify(heroicInventory)

}


console.log(creatingHeroRegister(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
))
console.log(creatingHeroRegister(['Jake / 1000 / ']))

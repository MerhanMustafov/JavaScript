function carAssembling(car){
    const carComp = {}
    carComp[Object.entries(car)[0][0]] = Object.entries(car)[0][1]
    
    const smallEngine = { power: 90, volume: 1800 }
    const normalEngine = { power: 120, volume: 2400 }
    const monsterEngine = { power: 200, volume: 3500 }
    
    const hatchback = { type: 'hatchback', color: car['color'] }
    const coupe = { type: 'coupe', color: car['color'] }

    if (car['power'] <= 90){
        carComp["engine"] = smallEngine
        
    }else if (car['power'] > 90 && car['power'] <= 120){
        carComp["engine"] = normalEngine
    }else if (car['power'] > 120 && car['power'] <= 200){
        carComp["engine"] = monsterEngine
    }
    if (car['carriage'] == 'hatchback'){
        carComp['carriage'] =  hatchback
    }else if (car['carriage'] == 'coupe'){
        carComp['carriage'] = coupe
    }
    let wheelsize = []
    if (car.wheelsize % 2 == 0){
        let n = car.wheelsize - 1
        wheelsize.push(n, n, n, n)
    }else{
        let n = car.wheelsize
        wheelsize.push(n, n, n, n)
    }
    carComp['wheels'] = wheelsize
    return carComp

}


console.log(carAssembling({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }))
console.log(carAssembling({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }))
console.log(carAssembling(input = {
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}))


// SECOND SOLUTION


// function carFactory(obj) {

//     function createEngine(hp) {
//         const engine = {}
//         if (hp <= 90) {
//             engine.power = 90;
//             engine.volume = 1800;
//         } else if (hp <= 120) {
//             engine.power = 120;
//             engine.volume = 2400;
//         } else if (hp <= 200) {
//             engine.power = 200;
//             engine.volume = 3500;
//         }
//         return engine;
//     }

//     function createCarriage(type, color) {
//         const carriage = { type: type, color: color };
//         return carriage;
//     }

//     function makeWheels(wheelSize) {
//         let newSize = wheelSize % 2 == 0 ? wheelSize - 1 : wheelSize;
//         const wheels = new Array(4).fill(newSize);
//         return wheels;
//     }
//     return {
//         model: obj.model,
//         engine: createEngine(obj.power),
//         carriage: createCarriage(obj.carriage, obj.color),
//         wheels: makeWheels(obj.wheelsize)
//     }
// }
 
// //tests
// console.log(carFactory({
//     model: 'Opel Vectra',
//     power: 110,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }));
 
// console.log(carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }));


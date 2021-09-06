function solve(person){
    if (person.dizziness === true){
        let requiredAmount = 0.1 
        let neededQuantity = requiredAmount * (person.weight * person.experience)
        person['levelOfHydrated'] += neededQuantity
        person.dizziness = false
    }
    return person
    // return `Person is ${person.levelOfHydrated}`
}

// console.log(solve({ weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true
// }))
// console.log(solve({ weight: 120,
//     experience: 20,
//     levelOfHydrated: 200,
//     dizziness: true
// }))
// console.log(solve({ weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false 
// }))

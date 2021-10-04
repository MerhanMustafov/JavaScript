function creatCard(face, suit){
    let validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let validCardSuits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663",
    }
    if (validCardFaces.includes(face) == false || Object.keys(validCardSuits) == false){
        throw new Error(Error)
    }

    return `${face}${validCardSuits[suit]}`
}

console.log(creatCard("A", "S"))
console.log(creatCard('10', 'H'))
console.log(creatCard('1', 'C'))
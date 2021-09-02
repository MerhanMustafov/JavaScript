function solve(array){
    array.sort((a, b) => a.localeCompare(b));
    let num = 1
    for (el of array){
        console.log(`${num}.${el}`)
        num += 1
    }
}

solve(["John", "Bob", "Christina", "Ema"])
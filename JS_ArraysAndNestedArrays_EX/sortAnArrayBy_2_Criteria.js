function solve(array){
    array.sort(function(a, b){ 
        a = a.toUpperCase();
        b = b.toUpperCase();
        if (a.length < b.length){
            return -1
        }else if (a.length > b.length){
            return 1
        }else if (a.length == b.length){
            if (a < b){
                return -1
            }else if (a > b){
                return 1
            }
        }
    })
    return array.join("\n")
}   

console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']))
console.log(solve(['test', 'Deny', 'omen', 'Default']))


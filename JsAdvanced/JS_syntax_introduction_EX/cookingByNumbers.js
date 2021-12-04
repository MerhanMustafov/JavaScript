function solve(num, opr1, opr2, opr3, opr4, opr5){
    num = Number(num);
    let operators = [opr1, opr2, opr3, opr4, opr5]
    // console.log(num, operators);

    for (let opr = 0; opr < operators.length; opr++){
        operator = operators[opr]
        if (operator === "chop"){
            num = num / 2
        } else if (operator === "dice"){
            num = Math.sqrt(num)
        }else if (operator === "spice"){
            num = num + 1
        }else if (operator === "bake"){
            num = num * 3
        }else if (operator === "fillet"){
            num = num - (num * 0.20)
        }
        console.log(num);
    }

}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// console.log("*".repeat(50))
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
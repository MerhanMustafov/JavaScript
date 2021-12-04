// function operations(array){
//     let result = ""
//     let sum = array.reduce(function(a, b) { return a + b; }, 0);
//     let concat = array.join('')
//     for (let i = 0; i < array.length; i++){

//     }
// }
function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b);
    aggregate(elements, "", (a, b)=>a + b);
 
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

// operations([1, 2, 3])
function circleArea(input){
    let result = typeof(input);
    if (result === "number"){
        result = (Math.pow(input, 2) * Math.PI)
        console.log(result.toFixed(2));
        
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${result}.`)
    }
}

// circleArea(5);
// circleArea("Name");
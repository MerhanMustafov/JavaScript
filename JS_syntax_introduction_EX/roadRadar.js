function solve(kmInHours, area){
    if (area === "residential"){
        if (kmInHours <= 20){
            console.log(`Driving ${kmInHours} km/h in a ${20} zone`);
        } else {
            let status = undefined
            let difference = kmInHours - 20
            if (difference <= 20){
                status = "speeding"
            } else if (difference <= 40){
                status = "excessive speeding"
            } else if (difference > 40){
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${20} - ${status}`);
        }
    }   
    if (area ==="city"){
        if (kmInHours <= 50){
            console.log(`Driving ${kmInHours} km/h in a ${50} zone`);
        } else {
            let status = undefined
            let difference = kmInHours - 50
            if (difference <= 20){
                status = "speeding"
            } else if (difference <= 40){
                status = "excessive speeding"
            } else if (difference > 40){
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${50} - ${status}`);
        }
    }
                
    if (area === "interstate"){
        if (kmInHours <= 90){
            console.log(`Driving ${kmInHours} km/h in a ${90} zone`);
        } else {
            let status = undefined
            let difference = kmInHours - 90
            if (difference <= 20){
                status = "speeding"
            } else if (difference <= 40){
                status = "excessive speeding"
            } else if (difference > 40){
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${90} - ${status}`);
        }
    }
    if (area ==="motorway"){
        if (kmInHours <= 130){
            console.log(`Driving ${kmInHours} km/h in a ${130} zone`);
        } else {
            let status = undefined
            let difference = kmInHours - 130
            if (difference <= 20){
                status = "speeding"
            } else if (difference <= 40){
                status = "excessive speeding"
            } else if (difference > 40){
                status = "reckless driving"
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${130} - ${status}`);
        }
    }    
    
}

// solve(40, 'city')
// solve(21, 'residential')
// solve(120, 'interstate')
// solve(200, 'motorway')
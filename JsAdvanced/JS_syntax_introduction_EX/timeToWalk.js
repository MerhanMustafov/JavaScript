function solve(steps, stride, speedKm){
    let distance = steps * stride;
    //1km = 1000m
    //1h = 60*60 = 3600s
    let speedInMps = speedKm / 3.6;

    let time = distance / speedInMps;
    let breaks = Math.trunc(distance / 500);
    time += (breaks * 60)
    
    let hours = Math.trunc(time / 3600);
    let minutes = Math.trunc((time % 3600) / 60);
    let seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${Math.round(seconds.toString().padStart(2, "0"))}`

}   

// console.log(solve(4000, 0.60, 5))
// console.log(solve(2564, 0.70, 5.5))
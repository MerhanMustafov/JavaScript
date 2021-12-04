function daysOfWeek(string){
    
    const daysName = {"monday": 1,
                "tuesday": 2,
                "wednesday": 3,
                "thursday": 4,
                "friday": 5,
                "saturday": 6,
                "sunday": 7}
    if (string.toLowerCase() in daysName){
        return daysName[string.toLowerCase()]
    }else { 
        return 'error'
    }

}

// console.log(daysOfWeek("Monday"));
// console.log(daysOfWeek("Friday"));

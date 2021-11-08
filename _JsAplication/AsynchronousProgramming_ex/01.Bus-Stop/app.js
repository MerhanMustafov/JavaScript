async function getInfo() {
    //take elements for later use
    //check the response in try/catch block 
    // make request
    let stopId = document.querySelector("#stopId")

    let stopName = document.querySelector('#stopName')
    let buses = document.querySelector('#buses')
    try{
        stopName.textContent = 'Loading...'
        buses.replaceChildren()
        let res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
        if(res.status != 200){
            throw new Error(`${res.status} ${res.statusText}`)
        }
        let info = await res.json()
        // console.log(info)
        // console.log(info.buses)
        // console.log(Object.entries(info.buses))
        // console.log(info.name)
        stopName.textContent = info.name
        Object.entries(info.buses).forEach(b => {
            let li = document.createElement('li');
            li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
            buses.appendChild(li)
        })
        // for (let stop of Object.entries(info.buses)){
        //     let li = document.createElement('li')
        //     li.textContent = `Bus ${stop[0]} arrives in ${stop[1]} minutes`
        // }
    }catch (err) {
        stopName.textContent = err
    }

    
    


}
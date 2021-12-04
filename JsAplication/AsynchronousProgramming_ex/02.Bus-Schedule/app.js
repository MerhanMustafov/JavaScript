function solve() {
    let infoTable = document.querySelector('.info')
    let departBtn = document.querySelector('#depart')
    let arriveBtn = document.querySelector('#arrive')
    let busStop = {
        next: "depot"
    }
    async function depart() {
        
        departBtn.disabled = true;

        let res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
        busStop = await res.json()
        infoTable.textContent = `Next stop ${busStop.name}`
        
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoTable.textContent = `Arriving at ${busStop.name}`
        
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
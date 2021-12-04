function solve(){
    // take the textarea value
    
    let button = document.querySelector('#btnSend')
    let data = {
        'count': 0,
        'best': 0,
        'average': 0,
        'resData': {'resName': undefined, 'thisResWorkers': undefined}
    }
    button.addEventListener('click', (ev) => {
        let textAreaValues = JSON.parse(document.querySelector("#inputs").getElementsByTagName("textarea")[0].value)
       
        textAreaValues.forEach(d => {
            let [restaurant, workers] = d.split(' - ')
            let [...resWorkers] = workers.split(', ')
            // let [worker, salary] = w.split(" ")
            console.log(restaurant)
            console.log(resWorkers)
            let  curData = {
                'count': 0,
                'best': 0,
                'average': 0,
                'workers': [],
                'resName': undefined
            }
            
            for (let worker of resWorkers){
                let [workerName, workerSalary] = worker.split(' ')
                console.log(workerName)
                console.log(workerSalary)
                curData.count += 1
                curData.workers.push({'name': workerName, 'value': workerSalary})
                if (Number(workerSalary) > curData.best){
                    curData.best = Number(workerSalary)
                }
                curData.average += Number(workerSalary)
                
            }
            curData.average /= curData.count
            curData.resName = restaurant
            curData.count = 0
            if (curData.average > data.average ){
                data.best = curData.best
                data.average = curData.average
                data.resData.resName = restaurant
                data.resData.thisResWorkers = curData.workers
                if (data.resData.resName == curData.resName){
                    data.resData.thisResWorkers.concat(curData[workers])
                }
                



            }
            
            
            console.log(data)
            
        })
        let outputBestRes = document.querySelector('#bestRestaurant').getElementsByTagName('p')[0]
        console.log(outputBestRes)
        outputBestRes.innerHTML = `Name: ${data.resData.resName} Average Salary: ${data.average.toFixed(2)} Best Salary: ${data.best.toFixed(2)}`

        let outputBestWorkers = document.querySelector('#workers').getElementsByTagName('p')[0]
        data.resData.thisResWorkers.sort((a, b) => Number(b.value) - Number(a.value))
        let res = data.resData.thisResWorkers.map(w => `Name: ${w.name} With Salary: ${w.value}`)
        outputBestWorkers.innerHTML = res.join(" ")

        console.log(data)
        
        
    })
    
}
function generateReport(){
    let sections = document.querySelectorAll("thead tr th")
    let contentTableRows = document.querySelectorAll("tbody tr")
    let output = document.getElementById('output')

    let indexOfCell = 0
    let result = []
    for (let row of contentTableRows){
        let obj = {}
        for (let cell of Array.from(row.children)){
            let isChecked = sections[indexOfCell].getElementsByTagName('input')[0].checked
            if (isChecked){
                sectionName = sections[indexOfCell].innerText.toLowerCase().trim()
                obj[sectionName] = cell.innerHTML
            }
            indexOfCell += 1
        }
        indexOfCell = 0
        result.push(obj)
    }
    output.innerHTML = JSON.stringify(result)
    
}
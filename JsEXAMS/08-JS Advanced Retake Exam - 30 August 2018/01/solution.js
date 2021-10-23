function addDestination(){
    let [iCity, iCountry, selectMenu] = Array.from(document.querySelector('#input').children).filter(el => el.tagName == 'INPUT' || el.tagName == 'SELECT')
    let [summer, authom, winter, spring] = Array.from(document.querySelector('#summaryBox').children).filter(el => el.tagName == 'INPUT')
    // let table = document.querySelector('#destinations')
    let tBody = document.querySelector('#destinationsList')
    if (iCity.value && iCountry.value){
        
        //create row
        let tr = document.createElement('tr')
        let tdLeft = document.createElement('td')
        tdLeft.textContent = `${iCity.value}, ${iCountry.value}`
        let tdRight = document.createElement('td')
        tdRight.textContent = selectMenu.textContent.split('\n').slice(1, -1)[selectMenu.selectedIndex].trim()

        tr.appendChild(tdLeft)
        tr.appendChild(tdRight)

        tBody.appendChild(tr)

        let currentSeason = [summer, authom, winter, spring].filter(summaryBox => selectMenu.value == summaryBox.previousElementSibling.textContent.slice(0, -1).toLowerCase())
        currentSeason[0].value = Number(currentSeason[0].value) + 1

        selectMenu.selectedIndex = 0
        iCity.value = ''
        iCountry.value = ''

    }
}
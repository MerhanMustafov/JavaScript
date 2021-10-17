window.addEventListener('load', solve);

function solve() {
    let btn = document.querySelector('.store')
    btn.addEventListener('click', onClick)

    let model = document.querySelector('#model')
    let year = document.querySelector('#year')
    let description = document.querySelector('#description')
    let price = document.querySelector('#price')

    let table = document.querySelector('#information')
    let tbody = table.querySelector('#furniture-list')

    function onClick(e){
        e.preventDefault()
        if (e.target.tagName === "BUTTON" && e.target.id === 'add'){
            
            if (model.value && year.value && description.value && price.value && year.value > 0 && price.value > 0){
                let furniture = createFurniture()
                furniture.forEach(f => tbody.appendChild(f)) 
                // tbody.innerHTML += furniture
                model.value = ""
                year.value = ""
                description.value = ""
                price.value = ""    
                function createFurniture() {

                    // let furniture = `<tr class="info">
                    // <td>${model.value}</td>
                    // <td>${Number(price.value).toFixed(2)}</td>
                    // <td>
                    // <button class="moreBtn">More Info</button>
                    // <button class="buyBtn">Buy it</button>
                    // </td>
                    // </tr>
                    // <tr class="hide">
                    // <td>Year: ${year.value}</td>
                    // <td colspan="3">Description: ${description.value}</td>
                    // </tr>`
                    
                    // return furniture

                    let tr = document.createElement('tr')
                    let tdModel = document.createElement('td')
                    let tdPrice = document.createElement('td')
                    let tdButtons = document.createElement('td')
                    let buttonMore = document.createElement('button')
                    let buttonBuy = document.createElement('button')
                    let tr2 = document.createElement('tr')
                    let tdYear = document.createElement('td')
                    let tdDesc = document.createElement('td')

                    tdModel.innerHTML = model.value
                    tdPrice.innerHTML = Number(price.value).toFixed(2)
                    // tdPrice.innerHTML = price.value ---> the mistake was here - when setting the price it should be fixed to 2
                    buttonMore.innerHTML = 'More Info'
                    buttonBuy.innerHTML = 'Buy it'
                    tdYear.innerHTML = `Year: ${year.value}`
                    tdDesc.innerHTML = `Description: ${description.value}`

                    tr.setAttribute('class', 'info') //and the second mistake was that i had forgotten to set this atribute to that element
                    buttonMore.setAttribute('class', 'moreBtn')
                    buttonBuy.setAttribute('class', 'buyBtn')
                    tr2.setAttribute('class', 'hide')
                    tdDesc.setAttribute('colspan', '3')

                    tdButtons.appendChild(buttonMore)
                    tdButtons.appendChild(buttonBuy)
                    tr.appendChild(tdModel)
                    tr.appendChild(tdPrice)
                    tr.appendChild(tdButtons)

                    tr2.appendChild(tdYear)
                    tr2.appendChild(tdDesc)

                    console.log(tr)
                    console.log(tr2)

                    return [tr, tr2]
                }

            }
            
        }else if (e.target.tagName === 'BUTTON' && e.target.className === 'moreBtn'){
            
            let hide = e.target.parentElement.parentElement.nextElementSibling
            console.log( e.target.parentElement.parentElement.nextElementSibling)
            if (e.target.textContent === 'More Info' && !hide.hasOwnProperty('style')){
                hide.style.display = 'contents'
                e.target.textContent = 'Less Info'

            }else if (e.target.textContent === 'More Info' && hide.style.display  == 'none'){
                hide.style.display = 'contents'
                e.target.textContent = 'Less Info'
            }else if (e.target.textContent === 'Less Info' && hide.style.display  == 'contents'){
                hide.style.display = 'none'
                e.target.textContent = 'More Info'
            }

        }else if (e.target.tagName === 'BUTTON' && e.target.className === 'buyBtn'){
            let el = e.target.parentElement.parentElement
            el.remove()
            let totalOutput = document.querySelector('.total-price')
            let buyPrice = Number(el.children[1].textContent)
            let currentTotal = Number(totalOutput.textContent)
            let result = (buyPrice + currentTotal).toFixed(2)
            totalOutput.textContent = result
            
        }
        
    }
    
}

// function solve() {
//     let btn = document.querySelector('.store')
//     btn.addEventListener('click', onClick)

//     let model = document.querySelector('#model')
//     let year = document.querySelector('#year')
//     let description = document.querySelector('#description')
//     let price = document.querySelector('#price')

//     let table = document.querySelector('#information')
//     let tbody = table.querySelector('#furniture-list')

//     function onClick(e){
//         e.preventDefault()
//         if (e.target.tagName === "BUTTON" && e.target.id === 'add'){
            
//             if (model.value && year.value && description.value && price.value && year.value >= 0 && price.value >= 0){
                // let furniture = `<tr class="info">
                // <td>${model.value}</td>
                // <td>${Number(price.value).toFixed(2)}</td>
                // <td>
                // <button class="moreBtn">More Info</button>
                // <button class="buyBtn">Buy it</button>
                // </td>
                // </tr>
                // <tr class="hide">
                // <td>Year: ${year.value}</td>
                // <td colspan="3">Description: ${description.value}</td>
                // </tr>`
//                 tbody.innerHTML += furniture
//                 model.value = ""
//                 year.value = ""
//                 description.value = ""
//                 price.value = ""

//             }
            
//         }else if (e.target.tagName === 'BUTTON' && e.target.className === 'moreBtn'){
            
//             let hide = e.target.parentElement.parentElement.nextElementSibling
//             console.log( e.target.parentElement.parentElement.nextElementSibling)
//             if (e.target.textContent === 'More Info' && !hide.hasOwnProperty('style')){
//                 hide.style.display = 'contents'
//                 e.target.textContent = 'Less Info'

//             }else if (hide.style.display  == 'none'){
//                 hide.style.display = 'contents'
//                 e.target.textContent = 'Less Info'
//             }else if ( hide.style.display  == 'contents'){
//                 hide.style.display = 'none'
//                 e.target.textContent = 'More Info'
//             }

//         }else if (e.target.tagName === 'BUTTON' && e.target.className === 'buyBtn'){
//             let el = e.target.parentElement.parentElement
//             el.remove()
//             let totalOutput = document.querySelector('.total-price')
//             let buyPrice = Number(el.children[1].textContent)
//             let currentTotal = Number(totalOutput.textContent)
//             let result = (buyPrice + currentTotal).toFixed(2)
//             totalOutput.textContent = result
            
//         }
        
//     }
    
// }

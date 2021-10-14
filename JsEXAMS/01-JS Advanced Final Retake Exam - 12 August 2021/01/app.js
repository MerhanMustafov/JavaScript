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
            
            if (model.value && year.value && description.value && price.value && year.value >= 0 && price.value >= 0){
                let furniture = `<tr class="info">
                <td>${model.value}</td>
                <td>${Number(price.value).toFixed(2)}</td>
                <td>
                <button class="moreBtn">More Info</button>
                <button class="buyBtn">Buy it</button>
                </td>
                </tr>
                <tr class="hide">
                <td>Year: ${year.value}</td>
                <td colspan="3">Description: ${description.value}</td>
                </tr>`
                tbody.innerHTML += furniture
                model.value = ""
                year.value = ""
                description.value = ""
                price.value = ""

            }
            
        }else if (e.target.tagName === 'BUTTON' && e.target.className === 'moreBtn'){
            
            let hide = e.target.parentElement.parentElement.nextElementSibling
            console.log( e.target.parentElement.parentElement.nextElementSibling)
            if (e.target.textContent === 'More Info' && !hide.hasOwnProperty('style')){
                hide.style.display = 'contents'
                e.target.textContent = 'Less Info'

            }else if (hide.style.display  == 'none'){
                hide.style.display = 'contents'
                e.target.textContent = 'Less Info'
            }else if ( hide.style.display  == 'contents'){
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

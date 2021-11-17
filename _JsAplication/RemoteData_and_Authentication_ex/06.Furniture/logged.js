import { redirectPage } from './redirectPage.js'
if (sessionStorage.getItem('userData') == null){
    redirectPage('loggedout')
}
const token = JSON.parse(sessionStorage.getItem('userData')).token
const tbody = document.querySelector('tbody')
loadRows()

document.querySelector('#logoutBtn').addEventListener('click', onLogout)

async function onLogout(e){
    console.log(token)


    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {'X-Authorization': token}
    })
   
    sessionStorage.removeItem('userData')
    redirectPage('loggedout')  
       
      
}


document.querySelector('#create').addEventListener('submit', onCreate);
async function onCreate(e){
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)

    const name = formData.get('name'); const price = formData.get('price');
    const factor = formData.get('factor'); const img = formData.get('img');
    if (name && price && factor && img){
        const data = {name, price, factor, img}; form.reset(); postFurniture(data); 
        loadRows()
    }

}


async function postFurniture(data){
    const url = `http://localhost:3030/data/furniture`
    try{
        
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'X-Authorization': token},
            body: JSON.stringify(data)
        })

        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const result = await res.json()
        console.log(result)
    }catch (err) {
        alert(err.message);
    }
}
async function getFurnitures() {
    const url = `http://localhost:3030/data/furniture`
    const res = await fetch(url, {
        method: 'get',
        headers: {'X-Authorization': token}
    })
    const data = await res.json()
    return data
}

async function loadRows(){
    tbody.replaceChildren()
    const data = await getFurnitures()
    // const rows =  data.map(f => createRow(f))
    const rows =  data.map(createRow)
    rows.forEach(f => tbody.appendChild(f))
    // console.log(data)
    // const row = createRow(data)
    // tbody.appendChild(row)
}

function createRow(data){
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>
    <img class="img"
        src="${data.img}">
</td>
<td>
    <p class="name">${data.name}</p>
</td>
<td>
    <p class="price">${data.price}</p>
</td>
<td>
    <p class="factor">${data.factor}</p>
</td>
<td>
    <input class="checkbox" type="checkbox"/>
</td>`
    return tr
}



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.querySelector('#buyBtn').addEventListener('click', onBuy);
document.querySelector('.orders').querySelector('button').addEventListener('click', allOrders)

function onBuy(e){
    const tableContent = tbody
    const rows = tableContent.children
    const checkedRows = [...rows].filter(row => row.querySelector('.checkbox').checked)
    // console.log(checkedRows)
    const data = checkedRows.map(row => {
        if(row.querySelector('.checkbox').checked == true){
            return row
        }
    })
    data.forEach(row => postBoughtOrdered(row))
    
    console.log(data)
   
}

async function postBoughtOrdered(row){
    const url = `http://localhost:3030/data/orders`
    const name = row.querySelector('.name').textContent
    const price = row.querySelector('.price').textContent

    const data = {name, price}
    try{
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json', 'X-Authorization': token}, 
            body: JSON.stringify(data)
        })
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
    }catch (err) {
        alert(err.message);
    }
}

async function getOrderedOnce(){
    const url = `http://localhost:3030/data/orders`
    const res = await fetch(url)
    const data = await res.json()
    
    return  data
}

async function allOrders(){
    const info =  await getOrderedOnce()
    const html = document.querySelector('.orders').children
    const furnitures = html[0]
    const total = html[1]

    let resultF = 'Bought furniture: '
    let resultT = 0 

    info.forEach(i => {
        resultF += i.name + ' '; resultT += Number(i.price)
    })

    furnitures.textContent = resultF; total.textContent = `Total price: ${resultT}`

    console.log(info)

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
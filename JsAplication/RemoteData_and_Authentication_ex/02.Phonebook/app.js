function attachEvents() {
    document.getElementById('btnCreate').addEventListener('click', create)
    
    document.getElementById("phonebook").addEventListener('click', del)
    document.getElementById("btnLoad").addEventListener('click', load)
    load()
}

let ul = document.getElementById('phonebook');
let personInput = document.getElementById('person');
let phoneInput = document.getElementById('phone');
attachEvents();


function create(){
    const person = personInput.value; const phone = phoneInput.value;
    const contact = {person, phone}
    addNewContactToServer(contact)
    
}

function del(e){
    if (e.target.className == 'del'){
        const id = e.target.id
        deleteContactFromServer(id)
        e.target.parentElement.remove()
        console.log(id)

    }

}

async function load(){
    const url = `http://localhost:3030/jsonstore/phonebook`
    let res = await fetch(url)
    let data = await res.json()
    ul.innerHTML = '';
    Object.values(data).map(p => createLi(p)).forEach(li => ul.appendChild(li))
}

async function addNewContactToServer(contact){
    const url = `http://localhost:3030/jsonstore/phonebook`
    let option = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contact)
    }
    const res = await fetch(url, option)
    const result = await res.json()
    console.log(result)
}

async function deleteContactFromServer(id){
    const url = `http://localhost:3030/jsonstore/phonebook/` + id;
    const res = await fetch(url, {method: 'delete'})
    const result = await res.json()
    console.log(result)
}


function createLi(info){
    let li = document.createElement('li')
    const name = info.person; const number = info.phone; const id = info._id;
    const button = `<button class="del" id=${id}>Delete</button>` 
    li.innerHTML = `${name}: ${number} ${button}`
    // let li = `<li>${name}: ${number} ${button}</li>`
    return li
}
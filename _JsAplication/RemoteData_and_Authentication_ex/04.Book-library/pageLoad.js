import { html } from './htmlElements.js'
const url = `http://localhost:3030/`
export async function onload(){
    html.tbody.replaceChildren()
    try{
        const res = await fetch(url + `jsonstore/collections/books`)
        if (res.status != 200){
            const error = await res.json();
            throw new Error(error.message)
        }
        const data = await res.json();
        const bEntries = Object.entries(data)
        bEntries.forEach(b => {
            const [id, book] = b
            const row = createRow(id, book)
            html.tbody.appendChild(row)
        })
        
    }catch (err) {
        alert(err.message)
    }
}

function createRow(id, book){
    const tr = document.createElement('tr');
    tr.id = id
    tr.innerHTML = `<td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>
                    <button class="edit">Edit</button>
                    <button class="del">Delete</button>
                    </td>`

    return tr
}
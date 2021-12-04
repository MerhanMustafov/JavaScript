import { createRow } from "./createTableRow.js"


const url = `http://localhost:3030/jsonstore/collections/books/`
const html = {
    body: document.querySelector('body'),
    table: document.querySelector('table'),
    tbody: document.querySelector('tbody'),
    submitForm: document.getElementById('submit'),
    saveForm: document.getElementById('save'),
    loadAllBooks: document.getElementById('loadBooks')
}



html.submitForm.style.display = 'block'
html.saveForm.style.display = 'none'
html.body.addEventListener('click', onClick);
let curBookId;
let editTitle;
let editAuthor;


async function onClick(e){
    if (e.target.parentElement.id == 'submit' && e.target.tagName == "BUTTON"){
        e.preventDefault()
        const formInputs = e.target.parentElement.children
        if (formInputs[2].value.length > 0 && formInputs[4].value.length > 0){
            
            submit()
        }else{
            alert('You should fill in the boxes')
        }
    }

    if (e.target.id == 'loadBooks'){
        load();
    }
    if(e.target.className == 'del'){
        const id = e.target.id
        const res = await fetch(url + id, {method: 'delete'})
        e.target.parentElement.parentElement.remove()   
    }
    if (e.target.tagName == "BUTTON" && e.target.className == 'edit'){
        html.submitForm.style.display = 'none'
        html.saveForm.style.display = 'block' 
        curBookId = e.target.parentElement.parentElement.id
        editTitle = html.saveForm.querySelector('[name="title"]')
        editAuthor = html.saveForm.querySelector('[name="author"]')
        editTitle.value = e.target.parentElement.parentElement.children[0].textContent
        editAuthor.value = e.target.parentElement.parentElement.children[1].textContent

    }
    if (e.target.tagName == "BUTTON" && e.target.parentElement.id == 'save'){
        e.preventDefault()
        if (editAuthor.value.length > 0 && editTitle.value.length > 0){
            const data = {author: editAuthor.value, title: editTitle.value}
            save(curBookId, data)
            load()
        }else{
            alert('You should fill in the boxes')
            
        }

    }
}

async function getBooks(){
    try{
        const res = await fetch(url)
        if (res.status !== 200){
            console.log(res.status)
            throw new Error(`${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        return data
    }
    catch (err) {
        alert(err.message + `- please try to submit a book first`);
    }


}
async function load() {
    const books = await getBooks()
    html.tbody.replaceChildren()
    let bEntries = Object.entries(books)
    bEntries.forEach(b => {
        const [id, book] = b
        const tRow = createRow(id, book.author, book.title)
        html.tbody.appendChild(tRow)
        
    })
    
}

async function submit(){
    const data = new FormData(html.submitForm)

    let t = html.submitForm.querySelector('[name="title"]')
    let a = html.submitForm.querySelector('[name="author"]')
 
    let title = data.get('title')
    let author = data.get('author')
    if (t.value.length > 0 && a.value.length > 0){
        let book = await addInServer(author, title)
        console.log(book)
        const row = createRow(book._id, book.author, book.title)
        html.tbody.appendChild(row)
        t.value = '';
        a.value = '';
    }

}

async function save(id, data){
    html.submitForm.style.display = 'block'
    html.saveForm.style.display = 'none'
    const option = {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
    const res = await fetch(url + id, option)
}

async function addInServer(author, title){
    const b = {author, title}

    const option = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(b)
    }

    let res = await fetch(url, option)
    let result = await res.json()
    console.log(result)
    return result
}


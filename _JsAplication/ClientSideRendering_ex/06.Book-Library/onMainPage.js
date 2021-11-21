
import {render, get, loadBooksTemplate, post, del, put} from './lib.js'


let bookId;

export function onClick(e){
    const formAdd = document.getElementById('add-form');
    const formEdit = document.getElementById('edit-form');
    if (e.target.className == 'del'){
        const id = e.target.parentElement.parentElement.id
        del(id)
        loadBooks()
    }else if (e.target.className == 'edit'){
        formAdd.style.display = 'none'
        formEdit.style.display = 'block'
        const id = e.target.parentElement.parentElement.id
        bookId = id
        const bookTitle = e.target.parentElement.parentElement.children[0].textContent
        const bookAuthor = e.target.parentElement.parentElement.children[1].textContent

        const titleBox = formEdit.querySelector('[name="title"]')
        const authorBox = formEdit.querySelector('[name="author"]')

        titleBox.value = bookTitle, authorBox.value = bookAuthor
    }
}

export async function onSubmit(e){
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)

    const title = formData.get('title');
    const author = formData.get('author');
    const data = {author, title}
    post(data)
    form.reset()
    
    loadBooks()
}

export function onSave(e){
    e.preventDefault()
    const formAdd = document.getElementById('add-form');
    const formEdit = document.getElementById('edit-form');
    const titleBox = formEdit.querySelector('[name="title"]')
    const authorBox = formEdit.querySelector('[name="author"]')

    put({author: authorBox.value, title: titleBox.value}, bookId)
    
    loadBooks()
    formAdd.style.display = 'block'
    formEdit.style.display = 'none'
}


export async function loadBooks(){
    const tbody = document.querySelector('tbody')
    console.log('BTN')
    const result = await get()
    const books = Object.entries(result).map(b => {
        b[1]['_id'] = b[0]
        return b[1]
    })
    render(Object.entries(books).map(b => loadBooksTemplate(b[1])), tbody)
}
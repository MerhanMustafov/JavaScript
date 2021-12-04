const url = `http://localhost:3030/`
import { html } from './htmlElements.js'
import { rotateForms, getSaveFormTitle, getSubmitFormTitle } from './rotateForms.js'
import { onload } from './pageLoad.js'


rotateForms()
html.body.addEventListener('click', onClick)

let curBookId;

async function onClick(e){
    if (e.target.id == 'loadBooks'){
        onload();
    }
    else if (e.target.tagName == "BUTTON" && e.target.parentElement.id == 'submit'){
        onSubmit(e)
    }
    else if (e.target.tagName == "BUTTON" && e.target.className == 'edit'){
        rotateForms()
        const title = getSaveFormTitle('title'); const author = getSaveFormTitle('author')
        const row = e.target.parentElement.parentElement
        const t = row.children[0].textContent; const a = row.children[1].textContent
        title.value = t; author.value = a
        curBookId = e.target.parentElement.parentElement.id
        onload()
    }
    else if (e.target.tagName == "BUTTON" && e.target.className == 'del'){
        const id = e.target.parentElement.parentElement.id
        await fetch(url + `jsonstore/collections/books/` + id, {
            method: 'delete'
        })
        onload()
        
    }
    else if (e.target.tagName == "BUTTON" && e.target.parentElement.id == 'save'){
        e.preventDefault()
        const formData = new FormData(e.target.parentElement)
        const title = formData.get('title');
        const author = formData.get('author');

        try{
            const res = await fetch(url +  `jsonstore/collections/books/` + curBookId , {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({author, title})
            })
            rotateForms()
            onload()

        }catch (err) {
            alert(err.message)
        }
    }
   
}

async function onSubmit(e){
    e.preventDefault()
    const form = e.target.parentElement
    const author = getSubmitFormTitle('author').value;
    const title = getSubmitFormTitle('title').value;

    try{
        const res = await fetch(url +  `jsonstore/collections/books`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({author, title})
        })
        if(res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const result = await res.json()
        form.reset()

    }catch (err) {
        alert(err.message);
    }
    onload()

}


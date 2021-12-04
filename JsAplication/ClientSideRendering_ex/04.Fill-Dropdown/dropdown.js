import {html, render} from './lib.js'
import {get, post} from './requests.js'



const dropdown = document.getElementById('menu');

const optionTemplate = (data) => html`<option value=${data._id}>${data.text}</option>`

async function addItem() {
    const data = await get();

    render(Object.values(data).map(d => optionTemplate(d)), dropdown)
}
addItem()


document.querySelector('form').addEventListener('submit', onAdd);
async function onAdd(e){
    e.preventDefault()
    const inputBox = document.getElementById('itemText');
    post({text: inputBox.value})

    addItem()
    
}
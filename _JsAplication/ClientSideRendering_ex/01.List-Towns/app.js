import {html, render} from './lib.js'


const form = document.querySelector('form');
form .addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault()
    const div = document.querySelector('#root')
    const inputBox = document.querySelector('[name="towns"]');
    const towns = inputBox.value.split(', ').filter(t => t.length > 0)//.map(t => t.trim());
    render(towns.map(t => listOfTowns(cElement(t))), div);
    e.target.reset()
}

function cElement(town){
    let li = document.createElement('li');
    li.textContent = town; 
    let del = document.createElement('button');
    del.textContent = "DELETE"; 
    del.className = 'del';
    del.onclick = onDelete
    li.appendChild(del);
    console.log(li);
    return li;
}

const listOfTowns = (liElement) => html`<ul>${liElement}</ul>`

function onDelete(e){
    e.target.parentElement.remove()
}


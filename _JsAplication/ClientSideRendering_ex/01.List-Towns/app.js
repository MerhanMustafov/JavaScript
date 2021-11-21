import {html, render} from './lib.js'

const form = document.querySelector('form');
const div = document.querySelector('#root');

form .addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault()
    const inputBox = document.querySelector('[name="towns"]');
    const towns = inputBox.value.split(',').map(t => t.trim())//.filter(t => t.length > 0)//.map(t => t.trim());
    const result = listOfTownsTemplate(towns, onDelete)
    render(result, div);
    e.target.reset()
}

const listOfTownsTemplate = (towns, onDelete) => html`
<ul>
    ${towns.map(t => html`<li  @click=${onDelete}>${t}<button class='del'>DELETE</button></li>`)}

</ul>`

function onDelete(e){
    e.target.parentElement.remove()
}





// const form = document.querySelector('form');
// const div = document.querySelector('#root');
// form .addEventListener('submit', onSubmit);
// function onSubmit(e){
//     e.preventDefault()
//     const ul = document.createElement('ul'); div.appendChild(ul)
//     const inputBox = document.querySelector('[name="towns"]');
//     const towns = inputBox.value.split(', ').filter(t => t.length > 0)//.map(t => t.trim());
//     render(towns.map(town => listOfTowns(town, onDelete)), ul);
//     e.target.reset()
// }

// const listOfTowns = (town, onDelete) => html`<li  @click=${onDelete}>${town}<button class='del'>DELETE</button></li>`

// function onDelete(e){
//     e.target.parentElement.remove()
// }


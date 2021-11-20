import {html, render , towns} from './lib.js'

// TEMPLATE
const townsTemplate = (town) => html`<li>${town}</li>`


// Load on reloadPage
const divTowns = document.getElementById('towns');
const ul = document.createElement('ul'); divTowns.appendChild(ul);
render(towns.map(town => townsTemplate(town)), ul)


// earch for matches on click
document.querySelector('button').addEventListener('click', search)
function search(e) {
   const inputBox = document.getElementById('searchText');
   if (inputBox.value){
      [...divTowns.firstElementChild.children].forEach(town => {
         // console.log('BEFORE IF:', town.textContent.toLowerCase().indexOf(inputBox.value.toLowerCase()))
         if (town.textContent.toLowerCase().indexOf(inputBox.value.toLowerCase()) != -1){
            town.style['font-weight'] = 'bold'
            // console.log('AFTER IF:',town.textContent.toLowerCase().indexOf(inputBox.value.toLowerCase()))
         }
      })
   }
}
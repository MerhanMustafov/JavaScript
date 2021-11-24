import { html, render } from "./node_modules/lit-html/lit-html.js"
import page from './node_modules/page/page.mjs' 

console.log('WORKS')

const navTemplate = (d) => html`<nav>
    ${Object.entries(d).map(a => html`<a href=${a[0]} >${a[1]}</a>`)}
    
</nav>`


const main = document.querySelector('main');
const data = {
    '/home': 'HOME',
    '/catalog': 'Catalog',
    '/about': 'About',
}
onLoad()
function onLoad(){
    const result = navTemplate(data)
    render(result, main)
}

page('/home', home)
page('/catalog', catalog)
page('/about', about)
page('*', '/home')

page.start();


function home(){
    document.querySelector('h2')
        .textContent = 'This is HOME page'
}
function catalog(){
    document.querySelector('h2')
        .textContent = 'This is CATALOG page'
}

function about(){
    document.querySelector('h2')
        .textContent = 'This is ABOUT page'
}
// function notFound(){
//     document.querySelector('h2')
//         .textContent = 'This is Not FOUND page'
// }
window.addEventListener('popstate', (event) => {
    event.preventDefault();
    console.log("location: ");
});

window.addEventListener('hashchange', function() {
    console.log('The hash has changed!')
});
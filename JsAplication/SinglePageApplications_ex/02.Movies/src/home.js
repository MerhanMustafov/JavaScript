import { showCreate } from "./create.js";
import { showView, e } from "./dom.js";
import {showDetails} from './details.js';

const section = document.querySelector("#home-page");
const catalog = document.querySelector(".card-deck.d-flex.justify-content-center");
section.querySelector("#createLink").addEventListener("click", (e) => {
  e.preventDefault();
  showCreate();
});
section.remove();

catalog.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    if(target.tagName == "BUTTON"){
        target = e.target.parentElement
    }
    if (target.tagName == "A"){
        const id = target.dataset.id 
        showDetails(id)
    }
})

export function showHome() {
  showView(section);
  getMovies();
}

async function getMovies() {
  const url = `http://localhost:3030/data/movies`;
  const res = await fetch(url);
  const data = await res.json();

  catalog.replaceChildren(...data.map(createMovieCard))
}

function createMovieCard(movie){
    const element = e('div', { className: "card mb-4"});
    element.innerHTML = `
        <img class="card-img-top" src="${movie.img}"
        alt="Card image cap" width="400">
    <div class="card-body">
        <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
        <a data-id=${movie._id} href="#/details/6lOxMFSMkML09wux6sAF">
            <button type="button" class="btn btn-info">Details</button>
        </a>
    </div> `

    return element
}

// window.getMovies = getMovies;

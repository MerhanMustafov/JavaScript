import {html} from "../lib.js"
import { getByYear } from "../api/data.js"


const searchTemplate = (cars) => html`
<section id="search-cars">
    <h1>Filter by year</h1>
    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button class="button-list">Search</button>
    </div>
    <h2>Results:</h2>
    <div class="listings">
       ${cars.length == 0 ? html`<p class="no-cars"> No results.</p>` : cars.map(carTemlate)}
    </div>
</section>
`;

const carTemlate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src="${car.imageUrl}">
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`;

export async function searchPage(ctx){

    update([])
    function update(cars){
        ctx.render(searchTemplate(cars))
    }

    document.querySelector('.button-list').addEventListener('click', onSearch)
    async function onSearch(e){
        const input = document.querySelector('#search-input')
        const year = input.value
        const cars = await getByYear(year)
        console.log(cars)
        update(cars)
    }
}






import { html } from "../lib.js";
import { getCarById } from "../api/data.js";
import { getUserData } from "../api/utils.js";


const detailsTemplate = (car, isOwner) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${car.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${car.brand}</li>
            <li><span>Model:</span>${car.model}</li>
            <li><span>Year:</span>${car.year}</li>
            <li><span>Price:</span>${car.price}$</li>
        </ul>

        <p class="description-para">${car.description}</p>

        ${isOwner   ? html`<div class="listings-buttons">
                        <a href="/edit/${car._id}" class="button-list">Edit</a>
                        <a href="/delete/${car._id}" class="button-list">Delete</a>
                        </div>`
                    : null}
        
    </div>
</section>
`;


export async function detailsPage(ctx){
    const userData = getUserData()
    const car = await getCarById(ctx.params.id)

    const isOwner = userData && userData.id == car._ownerId

    update()
    async function update(){
        ctx.render(detailsTemplate(car, isOwner))
    }
}




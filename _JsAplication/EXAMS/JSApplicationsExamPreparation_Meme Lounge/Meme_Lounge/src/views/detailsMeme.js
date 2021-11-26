import { getById, getMyItems } from '../api/data.js';
import { getUserData } from '../api/utils.js';
import {html, render} from '../lib.js';


const detailsTemplate = (meme, isOwner) => html`
<section id="meme-details">
<h1>Meme Title: Bad code can present some problems

</h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src="${meme.imageUrl}">
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>
            ${meme.description}
        </p>
        ${isOwner   ?   html`<a class="button warning" href="#">Edit</a>
                        <button class="button danger">Delete</button>`
                    :  null }
        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        
        
    </div>
</div>
</section>
`;


const main = document.querySelector('main');
export function detailsPage(ctx){
    const pathname = ctx.pathname == '/details'
    const cardId = ctx.params.id // id of the card >>> stored in the ctx.params
    ctx.render(detailsTemplate(loadMemes(cardId)), main)
}

async function loadMemes(cardId){
    const meme = await getById(cardId)
    const isOwner = meme._ownerId == getUserData().id // is owner the same as the logged user
    render(detailsTemplate(meme, isOwner), main)
    
}

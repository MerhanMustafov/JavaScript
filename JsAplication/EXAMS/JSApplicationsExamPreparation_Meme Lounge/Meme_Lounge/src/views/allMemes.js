import { getAll } from '../api/data.js';
import {html, until} from '../lib.js';


const allMemeTemplate = (cardsPromise) => html`
<section id="meme-feed">
<h1>All Memes</h1>
<div id="memes">
    <!-- Display : All memes in database ( If any ) -->
    ${until(cardsPromise, html`<p>Loading &hellip;</p>`)}
    <!-- Display : If there are no memes in database -->
    ${cardsPromise.length >= 0 ? html`<p class="no-memes">No memes in database.</p>` : null}
</div>
</section>
`;

const memeCardTemplate = (meme) => html`
<div class="meme" >
    <div class="card">
        <div class="info">
            <p class="meme-title">${meme.title}</p>
            <img class="meme-image" alt="meme-img" src="${meme.imageUrl}">
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
    </div>
</div>
`;

let ctx;

export function allMemes(context){
    ctx = context
    ctx.render(allMemeTemplate(loadMemes()))
}

async function loadMemes(){
    try{
        const allMemes = await getAll()
        return allMemes.map(meme => memeCardTemplate(meme))

    }catch (err) {
        alert(err.message);
    }
    
}


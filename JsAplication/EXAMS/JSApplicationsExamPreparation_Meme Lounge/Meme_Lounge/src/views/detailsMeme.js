import { deleteItem, getById } from '../api/data.js';
import { getUserData } from '../api/utils.js';
import {html, until} from '../lib.js';


const detailsTemplate = (meme, isOwner, cardId, del) => html`
<section id="meme-details">

<h1>Meme Title: ${meme.title}
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
        ${isOwner   ?   html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
                        <button id="${cardId}" class="button danger" @click=${del} >Delete</button>`
                    :  null }
    </div>
</div>
</section>
`;

let ctx;

export function detailsPage(context){
    ctx = context
    const cardId = ctx.params.id
    ctx.render(detailsTemplate(loadMemes(cardId, onDelete)))

    async function onDelete(e){
        await deleteItem(e.target.id)
        ctx.page.redirect('/allMemes')
        
    }

}

async function loadMemes(cardId, onDelete){
    try{
        const meme = await getById(cardId)
        const userData = getUserData()
        // const isOwner = userData && userData.id == meme._ownerId // ---> alternative without if statement
        let isOwner;
        if(userData != null){
            isOwner = meme._ownerId == userData.id // is owner the same as the logged user
        }
        let del = isOwner ? onDelete : ''

    ctx.render(detailsTemplate(meme, isOwner, cardId, del))

    }catch (err) {
        alert(err.message);
    }
    
}


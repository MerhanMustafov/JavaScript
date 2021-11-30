import { html } from "../lib.js";
import { getById, postLike, likesForBook, likesForUser } from "../api/data.js";
import { getUserData } from "../api/utils.js";



const detailsTemplate = (book, userData, isOwner, likes, isLiked, bookLikes) => html`
<section id="details-page" class="details">
<div class="book-information">
    <h3>${book.title}</h3>
    <p class="type">Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <div class="actions">
        ${isOwner   ?   html`<a class="button" href="/edit/${book._id}">Edit</a>
                        <a class="button" href="/delete/${book._id}">Delete</a>`
                    : null}
        ${userData == null || isOwner  || isLiked ? null : html`<a  class="button" href="#"  @click=${likes}>Like</a>`}
        
        <div class="likes">
            <img class="hearts" src="/images/heart.png">
            <span id="total-likes">Likes: ${bookLikes}</span>
        </div>
    </div>
</div>
<div class="book-description">
    <h3>Description:</h3>
    <p>${book.description}</p>
</div>
</section>
`;

let ctx;
export async function details(context){
    ctx = context
    const userData = getUserData()
    const book = await getById(ctx.params.id)
    const isOwner = userData && userData.id == book._ownerId
    
    // 0 == NOT liked (false) ....... 1(+) == LIKED (true) .... if there is no userData it will return NULL
    const isLiked = userData && await likesForUser(ctx.params.id, userData.id) != 0 
    
    update()
    async function update(){
        const bookLikes = await likesForBook(ctx.params.id) 
        ctx.render(detailsTemplate(book, userData, isOwner, likes, isLiked, bookLikes))
    }

    async function likes(){
        await postLike({bookId: ctx.params.id})
        update()
    }
}

import { html } from "../lib.js";
import { getGameById, getGameComments, postComment } from "../api/data.js";
import { getUserData } from "../api/utils.js";



const detailsTemplate = (game, isCreator, userData, onSubmit, comments) => html`
<section id="game-details">
<h1>Game Details</h1>
<div class="info-section">
    <div class="game-header">
        <img class="game-img" src="${game.imageUrl}" />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
    </div>
    <p class="text">
       ${game.summary}
    </p>
    <!-- Bonus ( for Guests and Users ) -->
    <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
            <!-- list all comments for current game (If any) -->
            ${comments.length == 0 
            ? html`<p class="no-comment">No comments.</p>`
            : comments.map(commentTemplate)}
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
    </div>
    <!-- Edit/Delete buttons ( Only for creator of this game )  -->
    ${isCreator ? html`<div class="buttons">
        <a href="/edit/${game._id}" class="button">Edit</a>
        <a href="/delete/${game._id}" class="button">Delete</a>
    </div>` : null}
</div>

${userData != null && !isCreator 
    ? html`<article class="create-comment">
        <label>Add new comment:</label>
        <form class="form" @submit=${onSubmit}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
        </article>`
    : null}


</section>
`;


const commentTemplate = (comments) => html`
<li class="comment">
    <p>Content: ${comments.comment}</p>
</li>
`;

let ctx;
export async function detailsPage(context){
    ctx = context
    const userData = getUserData()
    const game = await getGameById(ctx.params.id)
    console.log(ctx)

    const isCreator = userData && userData.id == game._ownerId

    update()
    async function update(){
        const comments = await getGameComments(ctx.params.id)
        ctx.render(detailsTemplate(game, isCreator, userData, addComment,comments))
    }

    async function addComment(e){
        e.preventDefault()
        let comment = document.querySelector('[name="comment"]')
        try{
            if(comment.value.trim() == ''){
                throw new Error ('you should add a comment')
            }
            const data = {comment: comment.value, gameId: ctx.params.id}
            postComment(data)
            
            comment.value = ''
            update()
        }catch (err) {{
            alert(err.message)
        }}

    }
}




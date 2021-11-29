import { getMyItems } from '../api/data.js';
import { getUserData } from '../api/utils.js';
import {html, until} from '../lib.js';


const userProfileTemplate = (count, userData, userMemes) => html`
<section id="user-profile-page" class="user-profile">
<article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
    <div class="user-content">
        <p>Username: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <p>My memes count: ${count}</p>
    </div>
</article>
<h1 id="user-listings-title">User Memes</h1>
<div class="user-meme-listings">
    <!-- Display : All created memes by this user (If any) --> 
    
    ${until(userMemes , html`<p>Loading &hellip;</p>`)}

    <!-- Display : If user doesn't have own memes  --> 
    ${count == 0 ? html`<p class="no-memes">No memes in database.</p>` : null}
    
</div>
</section>
`;

const userMemesTemplate = (meme) => html`
<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src="${meme.imageUrl}">
    <a class="button" href="details/${meme._id}">Details</a>
</div>
`;

export  async function userProfilePage(ctx){
    const userData = getUserData()
    const data = await getMyItems(userData.id)
    const count = data.length
    let userMemes;
    if(count > 0){
        userMemes = data.map(meme => userMemesTemplate(meme))
    }
    
    ctx.render(userProfileTemplate(count, userData, userMemes))
}
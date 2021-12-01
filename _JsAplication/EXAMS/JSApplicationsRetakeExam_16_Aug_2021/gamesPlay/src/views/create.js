import { html } from "../lib.js";
import {createGame} from "../api/data.js"




const createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
<form id="create" @submit=${onSubmit}>
    <div class="container">

        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title...">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category...">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game">
    </div>
</form>
</section>
`;


export function createPage(ctx){
    ctx.render(createTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)

        const title = formData.get('title');
        const category = formData.get('category');
        const maxLevel = formData.get('maxLevel');
        const imageUrl = formData.get('imageUrl');
        const summary = formData.get('summary');

        try{
            if(!title || !category || !maxLevel || !imageUrl || !summary){
                throw new Error ('all fields are required')
            }

            const data = {title, category, maxLevel, imageUrl, summary}
            await createGame(data)
            ctx.page.redirect('/home')

        }catch (err) {
            alert(err.message);
        }


    }
}
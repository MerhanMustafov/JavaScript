import { createItem } from '../api/data.js';
import {html} from '../lib.js';

const createTemplate = (onSubmit) => html`
<section id="create-meme">
    <form id="create-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

let ctx;

export function createPage(context){
    ctx = context

    ctx.render(createTemplate(onSubmit))
}


async function onSubmit(e){
    e.preventDefault()

    const formData = new FormData(e.target)

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();

    try{
        if(!title || !description || !imageUrl){
            throw new Error('fill in all boxes')
        }
        await createItem({title, description, imageUrl})
        ctx.page.redirect('/allMemes')

    }catch (err) {
        alert(err.message);
    }

}
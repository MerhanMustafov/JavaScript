import { editItem, getById } from '../api/data.js';
import {html, until} from '../lib.js';


const editTemplate =  (meme) => html`
<section id="edit-meme">
    ${until(meme)}
</section>
`;

const formTemplate = (meme) => html`
<form id="edit-form" @submit=${onSubmit}>
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}>
        </textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
`;


let ctx;

export  function editPage(context){
    ctx = context
    const memePromise = getById(ctx.params.id)
    console.log(memePromise)
    ctx.render(editTemplate(loadMeme(memePromise)))
}

async function loadMeme(memePromise){
    const meme = await memePromise
    console.log(formTemplate(meme))
    return formTemplate(meme)
}

async function onSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const imageUrl = formData.get('imageUrl').trim();

    try{
        if(!title || !description || !imageUrl){
            throw new Error('all boxeses must be filled')
        }
        const id = ctx.params.id; const data = {title, description, imageUrl}
        const editedMeme =  await editItem(id, data)
        ctx.page.redirect(`/details/${editedMeme._id}`)

    }catch (err) {
        alert(err.message);
    }
}
import { deleteItem, getById } from '../api/data.js';
import {html, until} from '../lib.js';
import { getUserData } from '../api/utils.js';



const detailsTemplate = (itemPromis) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
    </div>
    <div class="row space-top">
        ${until(itemPromis, html`<p>Loading &hellip;</p>`)}
    </div>
</div>
`;


const itemTemplate = (item, isOwner, onDelete) => html`
<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
        <img src="${item.img}" />
    </div>
</div>
</div>
<div class="col-md-4">
    <p>Make: <span>${item.make}</span></p>
    <p>Model: <span>${item.model}</span></p>
    <p>Year: <span>${item.year}</span></p>
    <p>Description: <span>${item.description}</span></p>
    <p>Price: <span>${item.price}</span></p>
    <p>Material: <span>${item.material}</span></p>
    ${isOwner ? html` <div>
        <a href=${`/edit/${item._id}`} class="btn btn-info">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
    </div>` : null}
    
</div>
`;
export function detailsPage(ctx){
    console.log(ctx)

    ctx.render(detailsTemplate(loadItem(ctx.params.id, onDelete)))

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this item?')
        if (choice){
            await deleteItem(ctx.params.id)
            ctx.page.redirect('/')
        }else{

        }
    }

} 
async function loadItem(id, onDelete){
    const item = await getById(id);
    if(item.img[0] == '.'){
        item.img = item.img.slice(1)
    }

    const userData = getUserData()
    let isOwner;
    if (userData != null){
        isOwner = userData.id == item._ownerId

    }

    return itemTemplate(item, isOwner, onDelete)





}
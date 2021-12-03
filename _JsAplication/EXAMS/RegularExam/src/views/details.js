import { html } from "../lib.js";
import { getCarById } from "../api/data.js";
import { getUserData } from "../api/utils.js";


const detailsTemplate = () => html`

`;


export async function detailsPage(ctx){
    const userData = getUserData()
    const car = await getCarById(ctx.params.id)

    const isOwner = userData && userData.id == car._ownerId

    update()
    async function update(){
        ctx.render(detailsTemplate())
    }
}




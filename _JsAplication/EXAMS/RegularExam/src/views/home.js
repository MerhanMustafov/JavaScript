import { html } from "../lib.js";

const homePageTemplate = () => html`

`;

export async function homePage(ctx){
    ctx.render(homePageTemplate())
}
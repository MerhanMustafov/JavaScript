import { html } from "../lib.js";
import { register } from "../api/data.js";


const registerTemplate = (onSubmit) => html`

`;


export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target)

        const username = formData.get('username');
        const password = formData.get('password');
        const repeatPass = formData.get('repeatPass');

        try{
            if(!username || !password || !repeatPass){
                throw new Error ('all fields are required')
            }

            if (password !== repeatPass){
                throw new Error ('passwords don\'t match')
            }

            await register(username, password)
            ctx.updateUserNav()
            ctx.page.redirect('/all-listings')
            
        }catch (err) {
            alert(err.message);
        }
    }
}
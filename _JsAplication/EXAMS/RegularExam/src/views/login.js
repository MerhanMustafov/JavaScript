import { html } from "../lib.js";
import { login } from "../api/data.js";


const logInTemplate = (onSubmit) => html`

`;

export function loginPage(ctx){
    ctx.render(logInTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target)

        const username = formData.get('username');
        const password = formData.get('password');

        try{
            if(!username || !password){
                throw new Error ('all fields are required')
            }
            await login(username, password)
            ctx.updateUserNav()
            ctx.page.redirect('/all-listings')

        }catch (err) {
            alert(err.message);
        }
    }
}
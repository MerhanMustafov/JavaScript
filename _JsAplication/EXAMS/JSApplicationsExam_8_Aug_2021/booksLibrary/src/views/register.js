import { html } from "../lib.js";
import { register } from "../api/data.js";



const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
<form id="register-form" action="" method="" @submit=${onSubmit}>
    <fieldset>
        <legend>Register Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <p class="field">
            <label for="repeat-pass">Repeat Password</label>
            <span class="input">
                <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Register">
    </fieldset>
</form>
</section>
`;



export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault()

        const formData = new FormData(e.target)

        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('confirm-pass');

        try{
            if(!email || !password || !repass){
                throw new Error ('all fields are required')
            }

            if (password !== repass){
                throw new Error ('passwords don\'t match')
            }

            await register(email, password)
            ctx.updateUserNav()
            ctx.page.redirect('/dashboard')
            
        }catch (err) {
            alert(err.message);
        }
    }
}
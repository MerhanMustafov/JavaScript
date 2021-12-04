import { html } from "../lib.js";
import { login } from "../api/data.js";


const logInTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form id="login-form" action="#" method="post" @submit=${onSubmit}>
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>
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
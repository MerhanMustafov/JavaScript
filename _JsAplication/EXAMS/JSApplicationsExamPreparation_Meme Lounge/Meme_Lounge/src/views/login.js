import { login } from '../api/api.js';
import {html} from '../lib.js';
import { notificationMsg } from './notification.js';

const loginTemplate = (onSubmit) => html`
<section id="login">
    <form id="login-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

let ctx;

export function loginPage(context){
    ctx = context

    ctx.render(loginTemplate(onSubmit))
}

async function onSubmit(e){
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try{
        if(!email || !password){
            throw new Error('Fill in all boxes')
        }
        await login(email, password)

        ctx.updateUserNav()
        ctx.page.redirect('/allMemes')

    }catch (err) {
        notificationMsg(err.message)
    }

}
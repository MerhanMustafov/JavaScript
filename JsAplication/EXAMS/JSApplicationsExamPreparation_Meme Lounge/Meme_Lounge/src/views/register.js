import { register } from '../api/api.js';
import {html} from '../lib.js';
import { notificationMsg } from './notification.js';



const registerTemplate = (onSubmit) => html`
<section id="register">
<form id="register-form" @submit=${onSubmit}>
    <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" name="username">
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <label for="repeatPass">Repeat Password</label>
        <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
        <div class="gender">
            <input type="radio" name="gender" id="female" value="female">
            <label for="female">Female</label>
            <input type="radio" name="gender" id="male" value="male" checked>
            <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register">
        <div class="container signin">
            <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
    </div>
</form>
</section>
`;

let ctx;

export function registerPage(context){
    ctx = context
    update()
    function update(){
        ctx.render(registerTemplate(onSubmit))

    }
}

async function onSubmit(e){
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form)
    const username = formData.get('username').trim();
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPass = formData.get('repeatPass').trim();

    const gender = formData.get('gender').trim();

    
    try{
        if(!username || !email || !password || !repeatPass){
            throw new Error('Fill in all boxes')
        }
        if(password != repeatPass){
            throw new Error('Passwords don\'t match')
        }
        await register(email, password, username, gender)
        
        ctx.updateUserNav()
        ctx.page.redirect('/allMemes')

    }catch (err) {
        notificationMsg(err.message)
    } 
}
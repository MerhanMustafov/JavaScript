import { login } from '../api/api.js';
import {html} from '../lib.js';


const loginTemplate = (onSubmit, errMessage) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    ${errMessage ? html`<div class="form-group error">${errMessage}</div>` : null}
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${'form-control' + (errMessage ? ' is-invalid' : ' is-valid')} id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${'form-control' + (errMessage ? ' is-invalid' : ' is-valid')} id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;

export function loginPage(ctx){
    console.log(ctx)
    //----> ctx.render = (context) => render(context, root);
    // ctx.render is a function which takes the teplate in this case the context
    // and renders it ---> 
    //----> render(context, root) in a place that we specified earlier in that case
    // root wich is ----> const root = document.querySelector('div.container')

    update()
    function update(error){
        ctx.render(loginTemplate(onSubmit, error)) // if there is no error passed ---> undefined 
    }
    
    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try{
            await login(email, password)
            ctx.updateUserNav() //updateUserNav() on logout this cuz the function is in that scope/module
                                // and here we use the asigned function to context/ctx --> ctx.updateUserNav()
                                //and this is before login/logout and before page.start()
            ctx.page.redirect('/') // each ctx/context has its own refference that is why we can 
                                    //ctx.page.redirect('/') from here
                                    //and this is called DEPENDENCY with INJECTION

        }catch (err) {
            update(err.message)
        }
    }
} 
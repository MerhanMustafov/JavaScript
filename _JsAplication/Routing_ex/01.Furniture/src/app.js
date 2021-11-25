import {page, render} from './lib.js';
import { getUserData } from './api/utils.js';

import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

import { logout } from './api/api.js';

const root = document.querySelector('div.container')
document.getElementById('logoutBtn').addEventListener('click', onlogout);


page(decorateContext)
page('/', catalogPage)              //instead of writhing this page('/', decorateContext, catalogPage)
page('/details/:id', detailsPage)   // everywhere, in each page(...) we just put it at the top and it
page('/create', createPage)         // asigns it in each context of the 'page' handler -- > the function in the page
page('/edit/:id', editPage)         // and we have access to the context in every function
page('/login', loginPage)           //evry router --> "page(...)" has it own refference in his context/ctx
page('/register', registerPage)     //that is why from other modules the page.redirect('/') happens this way
page('/my-furniture', catalogPage)  // ctx.page.redirect('/')


updateUserNav()
page.start()



function decorateContext(ctx, next){ // with this function we assign render to each page's context
    // console.log(ctx)              //and next() is necessary to call the next one
    ctx.render = (context) => render(context, root);
    ctx.updateUserNav = updateUserNav; // to be able to access it in every page we should decorate it/ 
                                        //assign it to context/ctx

    next()
}

function updateUserNav(){
    const userData = getUserData()
    if (userData){
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none'
    }else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block'
    }
}

async function onlogout(){
    // event is not needed and not necessary to call even.preventDefault() 
    //cuz of javascript:void(0) in ---> <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    // should be async cuz it will wait for some things

    await logout()
    updateUserNav()
    page.redirect('/') // we dont need to call ctx.page.redirect('/') here 
                        // we can do it directrli with page.redirect('/')
                        //  and this is EXPLICIT DEPENDENCY
}
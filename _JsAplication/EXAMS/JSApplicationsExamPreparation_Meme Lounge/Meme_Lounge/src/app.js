import { logout } from './api/api.js';
import { clearUserData, getUserData } from './api/utils.js';
import { page, render } from './lib.js';
import { allMemes } from './views/allMemes.js';
import { createPage } from './views/createMeme.js';
import { detailsPage } from './views/detailsMeme.js';
import { editPage } from './views/editMeme.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { updateNav } from './views/nav.js';
import { registerPage } from './views/register.js';
import { userProfilePage } from './views/userProfile.js';

const main = document.querySelector('main');


page(decorateContext)
page("/", homePage)
page("/home", homePage)//x
page('/login', loginPage)//x
page('/register', registerPage)//x
page('/create', createPage)//x
page('/details/:id', detailsPage)//x
page('/edit/:id', editPage)//x

page('/userProfile', userProfilePage)

page('/allMemes', allMemes)//x


updateUserNav()
page.start()

function decorateContext(ctx, next){
    ctx.render = (context) => render(context, main)
    ctx.updateUserNav = updateUserNav
    next()
}


function updateUserNav(){
    
    updateNav()
    const userData = getUserData()
    if(userData == null){
        page.redirect('/home')
        document.querySelector('.guest').style.display = 'block'
        document.querySelector('.user').style.display = 'none'
    }else{
        page.redirect('/allMemes')
        document.querySelector('.guest').style.display = 'none'
        document.querySelector('.user').style.display = 'inline-block'
    }
}


document.querySelector('#logoutBtn').addEventListener('click', onLogout)
async function onLogout(){
    await logout()
    clearUserData()
    updateUserNav()
    
}


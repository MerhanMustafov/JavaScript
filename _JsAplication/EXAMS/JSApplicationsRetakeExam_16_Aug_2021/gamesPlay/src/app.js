import {page, render} from "./lib.js"

import {homePage} from "./views/home.js"
import {catalogPage} from "./views/catalog.js"
import {detailsPage} from "./views/details.js"

import {loginPage} from "./views/login.js"
import {registerPage} from "./views/register.js"
import {createPage} from "./views/create.js"
import {editPage} from "./views/edit.js"

import { getUserData } from "./api/utils.js"
import { deleteGame , logout } from "./api/data.js"


const main = document.getElementById('main-content');


page(decorateContext)
page("/", homePage)
page("/home", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/catalog", catalogPage)

page("/details/:id", detailsPage)
page("/create", createPage)
page("/delete/:id", delGame)
page("/edit/:id", editPage)

page("/logout", logoutUser)

updateUserNav()
page.start()


function decorateContext(ctx, next) {
    ctx.render = (context) => render(context, main)
    ctx.updateUserNav = updateUserNav
    next()
}

function updateUserNav(){
    const userData = getUserData()
    if(userData != null){//has user
        document.getElementById('guest').style.display = 'none'
        document.getElementById('user').style.display = 'block'
    }else{
        document.getElementById('guest').style.display = 'block'
        document.getElementById('user').style.display = 'none'
    }
}


async function logoutUser() {
    await logout()
    updateUserNav()
    page.redirect('/home')
}

async function delGame(ctx){
    console.log(ctx)
    await deleteGame(ctx.params.id)
    page.redirect('/home')

}

import {page, render} from "./lib.js"
import { deleteAlbum, logout } from "./api/data.js"
import { getUserData } from "./api/utils.js"

import {homePage} from "./views/home.js"
import {detailsPage} from "./views/details.js"

import {loginPage} from "./views/login.js"
import {registerPage} from "./views/register.js"
import {createPage} from "./views/create.js"
import {editPage} from "./views/edit.js"
import { catalogPage } from "./views/catalog.js"
import { searchPage } from "./views/search.js"



const main = document.getElementById('main-content'); 


page(decorateContext)
page("/", homePage)
page("/home", homePage)
page("/login", loginPage)
page("/register", registerPage)

page("/details/:id", detailsPage)
page("/create", createPage)
page("/catalog", catalogPage)

page("/delete/:id", delGame)
page("/edit/:id", editPage)
page("/search", searchPage)


updateUserNav()
page.start()


function decorateContext(ctx, next) {
    ctx.render = (context) => render(context, main)
    ctx.updateUserNav = updateUserNav
    next()
}

function updateUserNav(){
    const userData = getUserData()
    if(userData != null){
        document.querySelectorAll('.guest').forEach(g => g.style.display = 'none')
        document.querySelectorAll('.user').forEach(u => u.style.display = 'inline-block')
    }else{
        document.querySelectorAll('.guest').forEach(g => g.style.display = 'inline-block')
        document.querySelectorAll('.user').forEach(u => u.style.display = 'none')
    }
}

document.getElementById('logoutBtn').addEventListener('click', logoutUser);
async function logoutUser() {
    await logout()
    updateUserNav()
    page.redirect('/home')
}

async function delGame(ctx){
    if(confirm('Are you sure you want to delete this album!')){
        await deleteAlbum(ctx.params.id)
        page.redirect('/catalog')
    }
}


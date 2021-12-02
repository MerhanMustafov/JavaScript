import {page, render} from "./lib.js"

import {homePage} from "./views/home.js"
import {allListingsPage} from "./views/allListingsPage.js"
import {detailsPage} from "./views/details.js"

import {loginPage} from "./views/login.js"
import {registerPage} from "./views/register.js"
import {createPage} from "./views/create.js"
import {editPage} from "./views/edit.js"

import { deleteCar, logout } from "./api/data.js"
import { getUserData } from "./api/utils.js"
import { myCarsPage } from "./views/myListings.js"
import { searchPage } from "./views/search.js"


const main = document.getElementById('site-content');


page(decorateContext)
page("/", homePage)
page("/home", homePage)
page("/login", loginPage)
page("/register", registerPage)
page("/all-listings", allListingsPage)

page("/details/:id", detailsPage)
page("/create", createPage)
page("/delete/:id", delGame)
page("/edit/:id", editPage)
page("/my-listings", myCarsPage)
page("/byYear", searchPage)


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
        document.getElementById('profile').style.display = 'block'
        document.getElementById('welcome').textContent = `Welcome ${userData.username}`
    }else{
        document.getElementById('guest').style.display = 'block'
        document.getElementById('profile').style.display = 'none'
    }
}

document.getElementById('logoutBtn').addEventListener('click', logoutUser);
async function logoutUser() {
    await logout()
    updateUserNav()
    page.redirect('/home')
}

async function delGame(ctx){
    await deleteCar(ctx.params.id)
    page.redirect('/all-listings')
}

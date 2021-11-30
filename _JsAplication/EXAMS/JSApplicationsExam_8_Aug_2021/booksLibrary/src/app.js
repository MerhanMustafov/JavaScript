import {page, render} from "./lib.js"

import {dashboard} from "./views/dashBoard.js"
import {loginPage} from "./views/login.js"
import {registerPage} from "./views/register.js"
import {myBooks} from "./views/myBooks.js"
import {create} from "./views/create.js"
import {edit} from "./views/edit.js"
import {details} from "./views/details.js"

import { getUserData } from "./api/utils.js"
import { deleteItem, logout } from "./api/data.js"


const main = document.getElementById('site-content');


page(decorateContext)
page("/", dashboard)
page("/dashboard", dashboard)
page("/login", loginPage)
page("/register", registerPage)
page("/myBooks", myBooks)
page("/create", create)
page("/details/:id", details)
page("/edit/:id", edit)
page("/delete/:id", delBook)

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
        document.getElementById('userEmail').textContent = `Welcome, ${userData.email}`
    }else{
        document.getElementById('guest').style.display = 'block'
        document.getElementById('user').style.display = 'none'
    }
}


async function logoutUser() {
    await logout()
    updateUserNav()
    page.redirect('/dashboard')
}

async function delBook(ctx){
    console.log(ctx)
    await deleteItem(ctx.params.id)
    page.redirect('/dashboard')

}

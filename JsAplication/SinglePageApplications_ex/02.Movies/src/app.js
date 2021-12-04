// import { showDetails } from "./details.js";
import { showHome } from "./home.js";
import { showLogin } from "./login.js";
import { showRegister } from "./register.js";
const views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister,
    
}
document.querySelector('#logoutBtn').addEventListener('click', onLogout)
const nav = document.querySelector('nav')
nav.addEventListener('click', (e) => {
    const view = views[e.target.id]
    if (typeof view == 'function'){
        e.preventDefault()
        view()
    }
})

export function updateNav(){
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    if(userData !== null){
        nav.querySelector('#welcomeMsg').textContent = `Welcome ${userData.email}`;
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'block');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'none')
    }else{
        [...nav.querySelectorAll('.user')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest')].forEach(e => e.style.display = 'block')
    }
}

async function onLogout(e){
    e.preventDefault()
    e.stopImmediatePropagation()

    console.log(JSON.parse(sessionStorage.getItem('userData')))

    const {token} = JSON.parse(sessionStorage.getItem('userData'))

    await fetch ('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {'X-Authorization': token},
    })
    sessionStorage.removeItem('userData')
    updateNav()
    showLogin()
}

updateNav()

// start app in home view
showHome()



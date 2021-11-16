import { showView } from "./dom.js"
import { showHome } from "./home.js"
import { updateNav } from "./app.js"

const section = document.querySelector('#form-login')
const form = section.querySelector('form')
form.addEventListener('submit', onLogin)
section.remove()


export function showLogin() {
    showView(section)
}



async function onLogin(e){
    e.preventDefault()
    const formData = new FormData(e.target)

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try{
        const url = 'http://localhost:3030/users/login'
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        if (res.ok !== true){
            const err = await res.json()
            throw new Error(err.message)
        }
        const data = await res.json()
        sessionStorage.setItem('userData', JSON.stringify({
            email: data.email,
            id: data._id,
            token: data.accessToken
        }))
        form.reset()
        updateNav()
        showHome()
    }catch (err) {
        alert(err.message);
    }
}



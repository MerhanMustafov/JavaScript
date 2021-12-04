import { showView } from "./dom.js"
import { showHome } from "./home.js"
import { updateNav } from "./app.js"

const section = document.querySelector('#form-sign-up')
const form = section.querySelector('form');
form.addEventListener('submit', onRegister)
section.remove()


export function showRegister() {
    showView(section)
}


async function onRegister(e){
    e.preventDefault()
    const formData = new FormData(e.target)

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim()
    if (password !== repeatPassword){
        alert('Passwords don\'t match')
        throw new Error('Passwords don\'t match')
    }

    try{
        const url = 'http://localhost:3030/users/register'
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



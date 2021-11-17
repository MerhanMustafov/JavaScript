import { redirectPage } from './redirectPage.js'

document.querySelector('#loginForm').addEventListener('submit', onLogIn)

async function onLogIn(e){
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    const email = formData.get('email'); const password = formData.get('password')
    if (email && password){
        try{
            const res = await fetch('http://localhost:3030/users/login', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            })
            if (res.ok !== true){
                const error = await res.json();
                throw new Error(error.message)
            }
            const result = await res.json()
            const token = result.accessToken
            const userData = {email, password, token}
            sessionStorage.setItem('userData', JSON.stringify(userData))
            redirectPage('logged')
            
        }catch (err) {
            alert(err.message);
        }
    }
    
}


document.querySelector('#registerForm').addEventListener('submit', onRegister)

async function onRegister(e){
    e.preventDefault()
    
    const form = e.target
    const formData = new FormData(form)

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    try {
        const res = await fetch(`http://localhost:3030/users/register`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const result = await res.json(); const token = result.accessToken
        const userData = {email, password, token}
        sessionStorage.setItem('userData', JSON.stringify(userData))
        redirectPage('registered')

    }catch (err) {
        alert(err.message);
    }
}


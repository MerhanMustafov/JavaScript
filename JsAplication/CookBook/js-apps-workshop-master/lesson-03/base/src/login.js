window.addEventListener('load', async () => {
    document.querySelector('form').addEventListener('submit', onLogin)

})

async function onLogin(e){ 
    e.preventDefault()

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    try{
        const res = await fetch(`http://localhost:3030/users/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }

        const data = await res.json();
        const token = data.accessToken;

        localStorage.setItem('token', token);
        window.location = '/index.html';


    }catch (err) {
        alert(err.message);

    }
}
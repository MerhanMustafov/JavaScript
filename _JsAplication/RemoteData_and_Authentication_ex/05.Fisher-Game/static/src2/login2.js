
const form = document.querySelector('form[id="login"]');
form.addEventListener('submit', onLogin);

async function onLogin(e){
    e.preventDefault()

    const url = `http://localhost:3030/users/login`
    const form = e.target;
    const formData = new FormData(form);
    let email = formData.get('email');
    const password = formData.get('password');


    try{
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        if (res.ok != true){
            const error = await res.json();
            console.log(error)
            console.log(error.message)
            throw new Error(error.message)
        }


        const result = await res.json();
        const token = result.accessToken;
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('EMAIL', email)
        localStorage.setItem('_ID', result._id)
        console.log(result)
        
        // console.log([...result.entries()])
        // let entries = [...result.entries()]
        // localStorage.setItem('RESULT', entries)
        // window.location = `/index.html`

    }catch (err) {
        alert(err.message);

    }

}

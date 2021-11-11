
const form = document.querySelector('form#register')
form.addEventListener('submit', onClick);

async function onClick(e){ 
    e.preventDefault()
    const url = `http://localhost:3030/users/register`
    const form = e.target;
    const formData = new FormData(form)
    let email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');
    const isAllFilled = [...formData.entries()].every(array => array[1].length > 0)
    if (!isAllFilled || password != rePass){
        alert(`passwords do not mach`)
        return;
    }
    try{
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        console.log(res)
        console.log(res.ok)
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const result = await res.json();
        const token = result.accessToken;
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('EMAIL', email)
        cookie.setItem('E', email)
        window.location = './index.html'
        
    }catch (err) {
        alert(err.message);
    }
}


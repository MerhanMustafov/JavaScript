
const html = {
    fieldset: document.querySelector('fieldset#main'),
    divText: document.querySelector('div#text'),
    guest: document.querySelector('p.email span'),
    loadBtn: document.querySelector('button.load'),
    catches: document.querySelector('div#catches')
}

document.querySelector('#user #logout').addEventListener('click', async () => {

    try{
        const url = `http://localhost:3030/users/logout`
        const token = localStorage.getItem('TOKEN')
        const res = await fetch(url, {
            method: "get",
            headers: { 
                "X-Authorization": token 
            },
        })
        console.log(res)
        console.log(res.status)
        if (res.status == 200 || res.status == 204){
            localStorage.removeItem('TOKEN')
            localStorage.removeItem('EMAIL')
            localStorage.removeItem('_ID')
            localStorage.removeItem('RESULT')
            window.location = './index.html'
        }else{
            const error = await res.json();
            throw new Error(error.message)
        }
        
    }catch (err) {
        alert(err.message);
    }
})
window.addEventListener('load', (e) => {
    e.preventDefault()
    const token = localStorage.getItem('TOKEN')
    
    if (token == null){
        window.location = './login.html'
    }else{
        console.log( html.guest.textContent)
        html.guest.textContent = localStorage.getItem('EMAIL')
    }
})

// html.divText.addEventListener('click', () => {
//     html.fieldset.style.display = 'inline-table'
//     html.divText.style.display = 'none';
// })
html.loadBtn.addEventListener('click', async () => {
    const res = await fetch(`http://localhost:3030/data/catches`)
    const result = await res.json();
    console.log(result)
    // result.forEach(x => console.log(x._ownerId))
    let ids = result.map(x => {'_ownerId': x._ownerId, '_id': x._id})
    console.log(ids)

    html.fieldset.style.display = 'inline-table'
    html.divText.style.display = 'none';
    [...html.catches.children].forEach(catche => console.log(catche))

})

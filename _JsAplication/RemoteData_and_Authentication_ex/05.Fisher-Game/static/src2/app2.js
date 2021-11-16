
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
    const id = '35c62d76-8152-4626-8712-eeb96381bea8'
    const res = await fetch(`http://localhost:3030/data/catches/`)
    const result = await res.json();
    
    let info = result.filter(x => {
        if (x._ownerId == localStorage.getItem('_ID')){
            return x
        }
    })[0]
    console.log(info)
    if (info == undefined){
        const updateBtn = document.querySelectorAll('.update')
        const deleteBtn = document.querySelectorAll('.delete')
        console.log(updateBtn)
        console.log(deleteBtn)

        Array.from(updateBtn).forEach(btn => btn.disabled = true)
        Array.from(deleteBtn).forEach(btn => btn.disabled = true)
        html.fieldset.style.display = 'inline-table'
        html.divText.style.display = 'none';
        return
    }

    Array.from(html.catches.children).forEach(catche => {
        const updateBtn = catche.querySelector('button.update')
        const deleteBtn = catche.querySelector('button.delete')
        // console.log(updateBtn.dataset.id)
        // console.log(deleteBtn.dataset.id)

        if (deleteBtn.dataset.id == info._id){
            updateBtn.disabled = false;
            deleteBtn.disabled = false;
        }else{
            updateBtn.disabled = true;
            deleteBtn.disabled = true;
        }
    })
    html.fieldset.style.display = 'inline-table'
    html.divText.style.display = 'none';

   

})


document.querySelector('button.add').disabled = false
const form = document.querySelector('#addForm')
form.addEventListener('submit', onAdd);

async function onAdd(e){
    e.preventDefault()
    console.log(e.target)
    const formData = new FormData(e.target)
    console.log([...formData.entries()])
    const isAllFillled = [...formData.entries()].every(el => el[1].length > 0)
    if(isAllFillled){
        //TODO
    }
    
}

// const formData = new FormData(form)
// console.log(formData)
// console.log(isAllFillled)
// console.log(form)


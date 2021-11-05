function attachEvents() {
    document.getElementById('main').addEventListener('click', onClick)
    loadMessages()
}

let messageArea = document.getElementById('messages');
let authorInput = document.querySelector('[name="author"]')
let contentInput = document.querySelector('[name="content"]')
attachEvents();

async function onClick(e){
    if(e.target.id == 'submit'){
        const author = authorInput.value; const content = contentInput.value
        let message = {author, content};
        createMessage(message)
    }else if(e.target.id == 'refresh'){
        loadMessages()
    }

}

async function loadMessages(){
    const url = `http://localhost:3030/jsonstore/messenger`
    const response = await fetch(url)
    const data = await response.json()
    const messages = Object.values(data).map(m => `${m.author}: ${m.content}`).join('\n')
    messageArea.value = messages
    contentInput.value = '';


}


async function createMessage(message){
    const url = `http://localhost:3030/jsonstore/messenger`
    const option = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    }
    contentInput.value = '';
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)

}




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function del(){
//     const url = `http://localhost:3030/jsonstore/messenger`
//     const response = await fetch(url)
//     const data = await response.json()
//     for (let i=0; i < Object.entries(data).length; i++){
//         let el = Object.entries(data)[i]
//         if(typeof el[1].author !== 'string' ||  el[1].author == '' || el[1].author.length < 5){
//             let id = el[0]
//             const res = await fetch(`http://localhost:3030/jsonstore/messenger/` + id, {
//                 method: 'delete'
//             })

//         }
        
//     }
    

// }

// async function get(){
//     const url = `http://localhost:3030/jsonstore/messenger`
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

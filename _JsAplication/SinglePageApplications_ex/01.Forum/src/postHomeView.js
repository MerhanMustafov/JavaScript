import { e } from './dom.js';

const topicArea = document.querySelector('.topic-title')

export async function addPostToServer(title, username, post){
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts`
    const res = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, username, post})
    })

    const result = await res.json()
    const p = createPost(result)
    topicArea.appendChild(p)

    console.log(result)

}


export function createPost(result){
    const div = document.createElement('div')
    div.className = "topic-name-wrapper"
    div.id = result._id
    div.innerHTML = `
            <div class="topic-name">
                <a href="#" class="normal">
                    <h2 id=${result._id}>${result.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${result.username}</span></p>
                        </div>
                    </div>


                </div>
            </div>`

    return div


}

/*
<div class="topic-container">
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <a href="#" class="normal">
                            <h2>Angular 10</h2>
                        </a>
                        <div class="columns">
                            <div>
                                <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                                <div class="nick-name">
                                    <p>Username: <span>David</span></p>
                                </div>
                            </div>
            
            
                        </div>
                    </div>
                </div>
            </div>
*/
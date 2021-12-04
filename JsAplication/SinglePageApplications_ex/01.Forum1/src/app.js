import {addPostToServer, createPost as cP} from './postHomeView.js'
import {showCommentView} from './commentView.js'

const cancelBtn = document.querySelector('.cancel')
const postBtn = document.querySelector('.public')
const form = document.querySelector('form')

cancelBtn.addEventListener('click', onCancel)
function onCancel(e){
    e.preventDefault()
    form.reset()
}

postBtn.addEventListener('click', onPost)
function onPost(e){
    e.preventDefault()
    const formData = new FormData(form)
    const title = formData.get('topicName');
    const username = formData.get('username');
    const post = formData.get('postText');
    if (title.length > 0 && username.length > 0 && post.length > 0){
        addPostToServer(title, username, post)
    }else{
        alert('all fields should be filled')
    }
}

window.onload = loadPosts
async function loadPosts(){
    const url = `http://localhost:3030/jsonstore/collections/myboard/posts`
    const res = await fetch(url)
    const data = await res.json()

    Object.values(data).forEach(post => {
        const p = cP(post)
        document.querySelector('.topic-container').appendChild(p)
    })
}


document.querySelector('.topic-container').addEventListener('click', onComment);


async function onComment(e){
    const main = document.querySelector('main');
    const formul = document.querySelector('.new-topic-border')
    const topicContainer = document.querySelector('.topic-container')
    const topicId = e.target.id
    const topic = document.getElementById(topicId)
    topicContainer.remove()
    formul.remove()
    main.appendChild(topic)
    main.innerHTML += `<div class="comment">
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

        <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
            dolorem quam,
            accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt odio
            nostrum facilis ipsum dolorem deserunt illum?</p>
    </div>


    <div id="user-comment">
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>Daniel</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
                <div class="post-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
                        dolorem quam.</p>
                </div>
            </div>
        </div>
    </div>
</div>`
    console.log(topic)
    // showCommentView(e.target)
}
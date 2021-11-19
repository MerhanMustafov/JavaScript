// Use this URL to create topics: 
const urlCreatTopic = `http://localhost:3030/jsonstore/collections/myboard/posts/`
const urlCreatComment = `http://localhost:3030/jsonstore/collections/myboard/comments/`

export async function postTopic(data){
    try{
        const res = await fetch(urlCreatTopic, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        if(res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const result = await res.json()
        return result
    }catch (err) {
        alert(err.message);
    }

}
export async function postComment(c){
    const res = await fetch(urlCreatComment, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(c)
    })
    const result = await res.json()
    return result
}
// export async function getUserComments(){
//     const res = await fetch(urlCreatTopic)
//     return await res.json()

// }

async function getPosts(){
    const res = await fetch(urlCreatTopic)
    return await res.json()

}

export async function getPostById(id){
    const res = await fetch(urlCreatTopic + id)
    return await res.json()

}

export async function loadTopics(){
    const topics = await getPosts()
    console.log(topics);
    Object.entries(topics).forEach(t => {
        const [id, top] = t
        const topic = cElement(top)
        document.querySelector('.topic-container').appendChild(topic)

    });
}

export function cElement(data){
    const comment = document.createElement('div');
    comment.className = "topic-name-wrapper"; comment.id = data._id
    comment.innerHTML = `<div class="topic-name">
    <a href="#" class="normal">
        <h2>${data.topicName}</h2>
    </a>
    <div class="columns">
        <div>
            <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
            <div class="nick-name">
                <p>Username: <span>${data.username}</span></p>
            </div>
        </div>


    </div>
</div>`
return comment
}

export function createCommentSection(data){
    const div = document.createElement('div');
    div.className = 'comment' 
    div.innerHTML = `<div class="header">
    <img src="./static/profile.png" alt="avatar">
    <p><span>${data.topicName}</span> posted on <time>2020-10-10 12:08:28</time></p>

    <p class="post-content">${data.postText}</p>
</div>`
return div

}

export function createComment (data){
    const div = document.createElement('div'); div.id = "user-comment";
    div.innerHTML = `<div class="topic-name-wrapper">
    <div class="topic-name">
        <p><strong>${data.username}</strong> commented on <time>3/15/2021, 12:39:02 AM</time></p>
        <div class="post-content">
            <p>${data.postText}</p>
        </div>
    </div>
</div>`
return div
}
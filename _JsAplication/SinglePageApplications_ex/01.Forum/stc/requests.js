// Use this URL to create topics: 
import * as c from './create.js' 
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
export async function getCommentsById(cId){
    const res = await fetch(urlCreatComment);
    const data = await res.json()
    const answers = Object.entries(data).filter(c => {
        const [i, comment] = c
        const id = comment.commentId
        if (id == cId){
            return c
        }
    })
    return answers
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
        const topic = c.ceateTopic(top)
        document.querySelector('.topic-container').appendChild(topic)

    });
}


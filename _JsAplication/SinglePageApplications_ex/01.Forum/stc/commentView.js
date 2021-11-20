import { getPostById, postComment, getCommentsById } from "./requests.js"
import * as c from './create.js' 

const container = document.querySelector('.container');
// async function onStart(){
//     const cId = sessionStorage.getItem('commentId')
//     const curcomment = document.getElementById(cId)
//     console.log(curcomment)
//     const comments = await getCommentsById(cId)
//     comments.forEach(cc => {
//         const com = c.createComment(cc[1])
//         curcomment.appendChild(com)

//     })

// }
// onStart()

// const m = document.querySelector('main')
// console.log(m)


export async function visualizeCommentView(e){
    const topicId = e.target.parentElement.parentElement.parentElement.id
    const post = await getPostById(topicId)
    const comment = c.createCommentSection(post)
    const answerArea = c.createAnswerArea()
    // main.remove()
    document.querySelector('main').remove()
    container.appendChild(comment)
    container.appendChild(answerArea)
}


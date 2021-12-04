import * as c from './create.js' 
import { showHomeView, addTopicToServer, visualizePostsOnHomePage } from "./homeView.js";
import { getPostById, postComment } from "./requests.js"
import {visualizeCommentView } from "./commentView.js"


showHomeView()

const container = document.querySelector('.container');
container.addEventListener('click', onClick);

let commentId;
async function onClick(e){
    console.log(e.target)
    if(e.target.tagName == 'BUTTON'){
        e.preventDefault()
        if(e.target.className == 'cancel'){
            const form = e.target.parentElement.parentElement
            form.reset()

        }else if(e.target.className == "public"){
            visualizePostsOnHomePage(e)
            
        }
    }else if (e.target.tagName == 'H2'){
        visualizeCommentView(e)
        commentId = e.target.parentElement.parentElement.parentElement.id
        sessionStorage.setItem('commentId', commentId)
        
        
    }if (e.target.tagName == 'BUTTON' && e.target.id == 'postComment'){
        const form = e.target.parentElement
        const formData = new FormData(form)
        const username = formData.get('username'); 
        const postText = formData.get('postText');
        if (username && postText){
            const data = {username, postText, commentId}
            const cc = await postComment(data)
            console.log(c)
            const comment = c.createComment(cc);
            document.querySelector('.comment').appendChild(comment)

        }

    }
    // console.log(e.target)
}

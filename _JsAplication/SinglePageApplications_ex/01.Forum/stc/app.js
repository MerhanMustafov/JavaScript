import { showHomeView, addPostToServer, visualizePostsOnHomePage } from "./homeView.js";
import { getPostById, createCommentSection, postComment, createComment } from "./requests.js"


showHomeView()


const container = document.querySelector('.container');
const main = document.querySelector('main');
container.addEventListener('click', onClick);

async function onClick(e){
    console.log(e.target)
    if(e.target.tagName == 'BUTTON'){
        e.preventDefault()
        if(e.target.className == 'cancel'){
            const form = e.target.parentElement.parentElement
            form.reset()

        }else if(e.target.className == "public"){
            const form = e.target.parentElement.parentElement
            console.log(form)
            const formData = new FormData(form)
            const topicName = formData.get('topicName');
            const username = formData.get('username');
            const postText = formData.get('postText');
            if (topicName && username && postText){
                const data = {topicName, username, postText};
                addPostToServer(data)
                visualizePostsOnHomePage()
            }
        }
    }else if (e.target.tagName == 'H2'){
        const topicId = e.target.parentElement.parentElement.parentElement.id
        const post = await getPostById(topicId)
        const comment = createCommentSection(post)
        main.remove()
        document.querySelector('.container').appendChild(comment)
        const div = document.createElement('div'); div.className = "answer-comment";
        div.innerHTML = `<p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button id="postComment">Post</button>
            </form>
        </div>`
        
        document.querySelector('.container').appendChild(comment)
        document.querySelector('.container').appendChild(div)

        
    }if (e.target.tagName == 'BUTTON' && e.target.id == 'postComment'){
        const form = e.target.parentElement
        const formData = new FormData(form)
        const username = formData.get('username'); 
        const postText = formData.get('postText');
        if (username && postText){
            const data = {username, postText}
            const c = await postComment(data)
            const comment = createComment(c);
            document.querySelector('.comment').appendChild(comment)

        }

    }
    // console.log(e.target)
}

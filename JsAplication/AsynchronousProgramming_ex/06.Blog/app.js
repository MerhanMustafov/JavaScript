function attachEvents() {
    // console.log('TODO...');
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts)
    document.getElementById('btnViewPost').addEventListener('click', displayPost)
}

attachEvents();

async function displayPost(){
    //get the id of current selected option
    let selectedId = document.querySelector('#posts').value
    
    let commentSection = document.getElementById('post-comments')
    let title = document.getElementById('post-title')
    let body = document.getElementById('post-body')
    title.textContent = 'Loading...';
    body.textContent = '';
    commentSection.replaceChildren()

    const [post, comments] = await Promise.all([
        getPostbyId(selectedId), getCommmentsbyId(selectedId)
    ]);
   
    // console.log(comments)
    title.textContent = post.title
    body.textContent = post.body
    comments.forEach(c => {
        // console.log(c)
        let li = document.createElement('li')
        li.textContent = c.text
        li.value = c.id

        commentSection.appendChild(li)
    })

}

async function getAllPosts(){
    let selectMenu = document.getElementById('posts');
    
    selectMenu.replaceChildren()
    
    let res = await fetch(`http://localhost:3030/jsonstore/blog/posts`)
    let posts = await res.json()
    
    Object.values(posts).forEach(p => {
        
        let option = document.createElement('option');
        option.textContent = p.title
        option.value = p.id
        selectMenu.appendChild(option)
    });
    
}

async function getPostbyId(postId){
    let res = await fetch(`http://localhost:3030/jsonstore/blog/posts/` + postId)
    // console.log(res)
    let post = await res.json()

    return post

}

async function getCommmentsbyId(postId){
    let res = await fetch(`http://localhost:3030/jsonstore/blog/comments`)
    let info = await res.json()
    let comments = Object.values(info).filter(c => c.postId == postId)
    return comments

}


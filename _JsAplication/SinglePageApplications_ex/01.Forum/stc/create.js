export function ceateTopic(data){
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

export function createComment(data){
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

export function createAnswerArea(){
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
    return div
}
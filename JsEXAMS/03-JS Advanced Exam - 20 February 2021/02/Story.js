class Story {
    constructor(title, creator){
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
    }
    get likes(){
        if (this._likes.length == 0){
            return `${this.title} has 0 likes`
        }else if(this._likes.length == 1){
            return `${this._likes[this._likes.length-1]} likes this story!`
        }else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }
    like (username){
        if(this._likes.includes(username)){
            throw new Error("You can't like the same story twice!")
        }
        if (username == this.creator){
            throw new Error("You can't like your own story!")
        }else{
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }
    dislike (username){
        if (!this._likes.includes(username)){
            throw new Error(`You can't dislike this story!`)
        }else {
            this._likes = this._likes.filter(el => el !== username)
            return `${username} disliked ${this.title}`
        }
    }
    comment (username, content, id){
        id = Number(id)
        let cIndex = this._comments.findIndex(el => el.id == id)

        if (id == undefined || cIndex == -1){
            let comment = {
                "id": this._comments.length + 1,
                username,
                content,
                "replies": [],
            }
            this._comments.push(comment)
            return `${username} commented on ${this.title}`
        }else if(cIndex > -1){
            let reply = {
                'id': Number(`${this._comments[cIndex].id}.${this._comments[cIndex].replies.length+1}`),
                username,
                content,
            }
            this._comments[cIndex].replies.push(reply)
            return `You replied successfully`
        }
    }
    toString(sortingType){
        if (sortingType == 'asc'){
            this._comments.sort((a, b) => a.id - b.id).forEach(comment => {
                comment.replies.sort((a, b) => a.id - b.id)
            });
        }else if (sortingType == 'desc'){
            this._comments.sort((a, b) => b.id - a.id).forEach(comment => {
                comment.replies.sort((a, b) => b.id - a.id)
            });
        }else if (sortingType == 'username'){
            this._comments.sort((a, b) => a.username.localeCompare(b.username)).forEach(comment => {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username))
            });
        }
        let info = []
        info.push(`Title: ${this.title}`)
        info.push(`Creator: ${this.creator}`)
        info.push(`Likes: ${this._likes.length}`)
        info.push(`Comments:`)
        for (let comment of this._comments){
            info.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
            if (comment.replies.length > 0){
                for (let i = 0; i < comment.replies.length; i++){
                    let reply = comment.replies[i]
                    info.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }               
            }
        }
        return info.join('\n')
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));




// let art = new Story("My Story", "Anny");
// console.log(art.like("John"));
// console.log(art.likes);
// console.log(art.dislike("John"));
// console.log(art.likes);
// console.log(art.comment("Sammy", "Some Content"));
// console.log(art.comment("Ammy", "New Content"));
// console.log(art.comment("Zane", "Reply", 1), "You replied successfully");
// console.log(art.comment("Jessy", "Nice :)"));
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log(art.toString('username'))


// // let art = new Story("My Story", "Anny");
// // assert.equal(art.like("John"),"John liked My Story!");
// // assert.equal(art.likes,"John likes this story!");
// // assert.equal(art.dislike("John"), "John disliked My Story");
// // assert.equal(art.likes, "My Story has 0 likes");
// // assert.equal(art.comment("Sammy", "Some Content"), "Sammy commented on My Story");
// // assert.equal(art.comment("Ammy", "New Content"), "Ammy commented on My Story");
// // assert.equal(art.comment("Zane", "Reply", 1), "You replied successfully");
// // assert.equal(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
// // assert.equal(art.comment("SAmmy", "Reply@", 1), "You replied successfully");

// // assert.equal(art.toString('username'),`Title: My Story


// // let art = new Story("My Story", "Anny");
// // art.like("John");
// // console.log(art.likes);
// // art.dislike("John");
// // console.log(art.likes);
// // art.comment("Sammy", "Some Content");
// // console.log(art.comment("Ammy", "New Content"));
// // art.comment("Zane", "Reply", 1);
// // art.comment("Jessy", "Nice :)");
// // console.log(art.comment("SAmmy", "Reply@", 1));
// // console.log()
// // console.log(art.toString('username'));
// // console.log()
// // art.like("Zane");
// // console.log(art.toString('desc'));

// // Creator: Anny
// // Likes: 0
// // Comments:
// // -- 2. Ammy: New Content
// // -- 3. Jessy: Nice :)
// // -- 1. Sammy: Some Content
// // --- 1.2. SAmmy: Reply@
// // --- 1.1. Zane: Reply`);

// console.log(art.like("Zane"));

// console.log(art.toString('desc'))

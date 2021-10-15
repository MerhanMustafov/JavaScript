class ArtGallery {
    constructor(string){
        this.creator = string
        this.possibleArticles = {'picture':200, 'photo':50, 'item':250}
        this.listOfArticles = []
        this.guests = []

    }
    addArticle( articleModel, articleName, quantity){
        articleModel = articleModel.toLowerCase()
        let isInPossibleArticles = Object.keys(this.possibleArticles).includes(articleModel)
        if (!isInPossibleArticles){
            throw new Error("This article model is not included in this gallery!")
        }
        for (let article of this.listOfArticles){
            if(article['articleName'] == articleName && article['articleModel'] == articleModel){
                article.quantity += quantity
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
                
            }
        }
        let newArticle = {
            'articleModel': articleModel.toLowerCase(),
            'articleName': articleName, 
            'quantity': quantity
        }
        this.listOfArticles.push(newArticle)
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest (guestName, personality){
        let isGuestPresent = this.guests.includes(guestName) 
        if (isGuestPresent){
            throw new Error(`${guestName} has already been invited.`)
        }
        for (let guest of this.guests){
            if(guest['guestName'] == guestName){
                throw new Error(`${guestName} has already been invited.`)
            }
        }

        let points = 0
        if(personality == 'Vip'){
            points = 500
        }else if (personality == 'Middle'){
            points = 250 
        }else{
            points = 50
        }

        let newGuest = {
            "guestName": guestName, 
            "points": points, 
            'purchaseArticle': 0,
        }
        this.guests.push(newGuest)
        return `You have successfully invited ${guestName}!`
    }

    buyArticle (articleModel, articleName, guestName){
        let currentArticle = undefined
        for (let article of this.listOfArticles){
            if (article['articleName'] == articleName){
                if (article['articleModel'] == articleModel){
                    currentArticle = article
                    break;
                }
            }
        }
        
        if (currentArticle == undefined || !Object.keys(this.possibleArticles).includes(currentArticle['articleModel'])){
            throw new Error("This article is not found.")
        }else if(currentArticle['quantity'] == 0){
            return `The ${articleName} is not available.`
        }

        let theGuest = undefined;
        for (let guest of this.guests){
            if(guest['guestName'] == guestName){
                theGuest = guest
            }
        }

        let neededPoints = this.possibleArticles[articleModel]
        if (theGuest == undefined){
            return "This guest is not invited."
        }else{
            if (theGuest['points'] < neededPoints){
                return "You need to more points to purchase the article."
            }else{
                theGuest['points'] -= neededPoints
                currentArticle['quantity'] -= 1
                theGuest['purchaseArticle'] += 1
                return `${guestName} successfully purchased the article worth ${neededPoints} points.`
            }
        }
        
    }

    showGalleryInfo (criteria){
        let articleInfo = ['Articles information:']
        let guestInfo = ['Guests information:']
        if (criteria == 'article'){
            for (let article of this.listOfArticles){
                let info = `${article['articleModel']} - ${article['articleName']} - ${article['quantity']}`
                articleInfo.push(info)
            }
            return articleInfo.join('\n')
        }else if(criteria == 'guest'){
            for (let guest of this.guests){
                let info = `${guest['guestName']} - ${guest['purchaseArticle']}`
                guestInfo.push(info)
            }
            return guestInfo.join('\n')
        }

    }
}

// let str = 'ABC'
// str = str.toLowerCase()
// console.log(str)
// input 1
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// input 2
// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// input 3
// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

// input 4
// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));

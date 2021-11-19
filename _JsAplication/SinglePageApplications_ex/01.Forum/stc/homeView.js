import { changeView } from "./changeView.js"
import { postTopic, cElement , loadTopics} from "./requests.js" 

const homeView = document.querySelector('main')
homeView.remove()

export function showHomeView(){
    changeView(homeView)
    loadTopics()
}

export async function addPostToServer(data){
    const d = await postTopic(data)
    console.log(d)
    const topic = cElement(d)
    document.querySelector('.topic-container').appendChild(topic)
}

export function visualizePostsOnHomePage(){

}
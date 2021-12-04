import { changeView } from "./changeView.js"
import { postTopic , loadTopics} from "./requests.js" 
import * as c from './create.js' 

const homeView = document.querySelector('main')
homeView.remove()

export function showHomeView(){
    changeView(homeView)
    loadTopics()
}

export async function addTopicToServer(data){
    return await postTopic(data)
    
}

export async function visualizePostsOnHomePage(e){
    const form = e.target.parentElement.parentElement
    const formData = new FormData(form)
    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');
    if (topicName && username && postText){
        const data = {topicName, username, postText};
        const d = addTopicToServer(data)
        const topic = c.ceateTopic(d)
        document.querySelector('.topic-container').appendChild(topic)
    }
}
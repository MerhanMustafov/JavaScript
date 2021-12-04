function solve(){
    let delegation = document.querySelector('.wrapper')

    delegation.addEventListener('click', onClick)
    let sections = Array.from(document.querySelectorAll('section')).slice(1,)
    let open = sections[0]
    let inProgress = sections[1]
    let complete = sections[2]

    function onClick(e){
        e.preventDefault()
        if(e.target.id == 'add'){
            let task = document.querySelector('#task')
            let description = document.querySelector('#description')
            let date = document.querySelector('#date')

            //validation of inputs
            let allInputsFilled = Array.from(document.querySelector('form').children)
            .filter(el => el.tagName == "INPUT" || el.tagName == 'TEXTAREA')
            .every(inputBox => inputBox.value)
            

            if (allInputsFilled){

                //creating the article
                let article = `<article>
                <h3>${task.value}</h3>
                <p>Description: ${description.value}</p>
                <p>Due Date: ${date.value}</p>
                <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
                </div>
                </article>`

                open.children[1].innerHTML += article

            }
        //StartButton
        }else if(e.target.tagName == "BUTTON" && e.target.className == 'green'){//change the order and see what will happen?
            // let divFlex = document.querySelector('.flex')//--> this was the mistake
            let divFlex = e.target.parentElement
            let startBtn = divFlex.querySelector('.green')
            startBtn.setAttribute('class', "orange")
            startBtn.textContent = 'Finish'
            divFlex.appendChild(startBtn)
            inProgress.children[1].appendChild(divFlex.parentElement)
            
        //DeleteButton
        }else if (e.target.className == 'red'){
            e.target.parentElement.parentElement.remove()
        
        //FinishButton
        }else if (e.target.tagName == 'BUTTON' && e.target.className == 'orange'){
            let article = e.target.parentElement.parentElement
            e.target.parentElement.remove()
            complete.children[1].appendChild(article)
        }
    }
}






/* 
function solve() {
    let wrapper = document.querySelector('.wrapper')
    wrapper.addEventListener('click', onClick)
    let allSections = Array.from(document.querySelectorAll('section'))

    function onClick(e){
        e.preventDefault()

        let openSection = allSections[1].querySelector('div').nextElementSibling
        if (e.target.id == 'add' && e.target.tagName == "BUTTON"){
            let task = document.querySelector('form').querySelector('#task')
            let description = document.querySelector('form').querySelector('#description')
            let date = document.querySelector('form').querySelector('#date')

            if (task.value=='' || description.value=='' || date.value==''){
                return;
            }
            
            let article = `<article>
            <h3>${task.value}</h3>
            <p>Description: ${description.value}</p>
            <p>Due Date: ${date.value}</p>
            <div class="flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
            </div>
            </article>`

            
            openSection.innerHTML += article
           
        }else if(e.target.className == 'red' && e.target.tagName == "BUTTON"){
            
            e.target.parentElement.parentElement.remove()
            
        }else if (e.target.className == 'green' && e.target.tagName == "BUTTON"){
               
            
            let sectionInProgress = allSections[2].querySelector('#in-progress')
            sectionInProgress.appendChild(e.target.parentElement.parentElement)
            let divFlex = e.target.parentElement
            divFlex.innerHTML = ''
            let buttons = `<button class="red">Delete</button>
            <button class="orange">Finish</button>`
            divFlex.innerHTML = buttons
        
            
        }else if (e.target.className == 'orange' && e.target.tagName == "BUTTON"){

            
            let completed = allSections[3].querySelector('div').nextElementSibling
            let article = e.target.parentElement.parentElement
            e.target.parentElement.remove()
            completed.appendChild(article)          
        }
     
        
    }

}
*/


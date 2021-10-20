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
            if (task.value.length && description.value.length && date.value.length){

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
            console.log(divFlex)
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





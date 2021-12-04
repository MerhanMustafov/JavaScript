function solution(){
    let delegation = document.querySelector('.container')

    let sections = Array.from(document.querySelectorAll('section')).slice(1, )
    let listOfGifts = sections[0]
    let sentGifts = sections[1]
    let discardedGifts = sections[2]

    delegation.addEventListener('click', onClick)


    function onClick(e){
        if (e.target.tagName == "BUTTON" && e.target.textContent == 'Add gift'){
            let input = document.querySelector('input[type="text"]')
            
            /*
            //doesn t work with this approach
            let item = `<li class="gift">
            ${input.value}//maybe because of that 
            <button id="sendButton">Send</button>
            <button id="discardButton">Discard</button>
            </li>`
            */
            let li = document.createElement('li')
            li.textContent = input.value
            let buttonSend = document.createElement('button')
            buttonSend.setAttribute('id', 'sendButton')
            buttonSend.textContent = 'Send'
            let buttonDiscard = document.createElement('button')
            buttonDiscard.setAttribute('id', 'discardButton')
            buttonDiscard.textContent = 'Discard'
            li.appendChild(buttonSend)
            li.appendChild(buttonDiscard)


            let ul = listOfGifts.children[1]
            ul.appendChild(li)

            input.value = ''

            Array.from(ul.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(li => ul.appendChild(li))


        }else if (e.target.tagName == 'BUTTON' && e.target.id == "sendButton"){
            let ul = sentGifts.children[1]
            let li = e.target.parentElement
            ul.appendChild(li)
            e.target.nextElementSibling.remove()
            e.target.remove()

        }else if (e.target.tagName == 'BUTTON' && e.target.id == "discardButton"){
            let ul = discardedGifts.children[1]
            let li = e.target.parentElement
            ul.appendChild(li)
            e.target.previousElementSibling.remove()
            e.target.remove()

        }
    }
}
function solution() {
    let addGiftButton = document.querySelector('.card div button')
    addGiftButton.addEventListener('click', onClick)

    let allSections = Array.from(document.querySelector('.container').children)

    function onClick (e){
        e.preventDefault()
        let inputBox = document.querySelector('.card div input[type="text"]')
        if (inputBox.value == ''){
            return
        }

        let item = {
            'li': crElement('li', 'gift', {},inputBox.value), 
            'sendButton': crElement('button',{}, 'sendButton', 'Send'), 
            'discardButton': crElement('button', {}, 'discardButton', 'Discard'),       
        }
        item.li.appendChild(item.sendButton), item.li.appendChild(item.discardButton)

        let listOfGifts = allSections[1].querySelector('ul')
        listOfGifts.appendChild(item.li)
        Array.from(listOfGifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(item => listOfGifts.appendChild(item))
        inputBox.value = '';

        item.sendButton.addEventListener('click', send)
        item.discardButton.addEventListener('click', discard)

        function discard(e){
            // e.target.previousElementSibling.remove()
            // e.target.remove()
            Array.from(e.target.parentElement.querySelectorAll('button')).forEach(b => b.remove())
            let discardList = allSections[3].querySelector('ul')
            discardList.appendChild(item.li)
            // Array.from(discardList.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(item => discardList.appendChild(item)) //it is not in the requirements
        }

        function send(e){
            // e.target.nextElementSibling.remove()
            // e.target.remove()
            Array.from(e.target.parentElement.querySelectorAll('button')).forEach(b => b.remove())
            let sentGifts = allSections[2].querySelector('ul')
            sentGifts.appendChild(item.li)
            // Array.from(sentGifts.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(item => sentGifts.appendChild(item)) //it is not in the requirements
        }
        

        function crElement(t, classContent, idContent, textContent){
            let tag = document.createElement(t)
            if (tag.tagName == 'LI'){
                tag.setAttribute('class', classContent)
            }else if(tag.tagName == 'BUTTON'){
                tag.setAttribute('id', idContent)
            }
            
            tag.textContent = textContent
            return tag
        }
    }
}






//colleague's solution
// function solution() {
//     let addBtn = document.querySelector(".card button");
//     let inputAdd = document.querySelector(".card input");
  
//     let ulItems = document.querySelectorAll(".card ul");
//     let ulListOfGifts = ulItems[0];
//     let ulSendGifts = ulItems[1];
//     let ulDiscarded = ulItems[2];
  
//     console.log(ulListOfGifts);
  
//     addBtn.addEventListener("click", onClick);
  
//     console.log(addBtn);
//     console.log(inputAdd);
  
//     function onClick(ev) {
//         // .forEach((node) => ulListOfGifts.appendChild(node));
//       let listItem = document.createElement("li");
//       listItem.textContent = inputAdd.value;
//       listItem.classList.add("gift");
//       let sendBtn = document.createElement("button");
//       sendBtn.id = "sendButton";
//       sendBtn.textContent = "Send";
//       sendBtn.addEventListener("click", onSend);
//       listItem.appendChild(sendBtn);
//       let discardBtn = document.createElement("button");
//       discardBtn.id = "discardButton";
//       discardBtn.textContent = "Discard";
//       discardBtn.addEventListener("click", onDiscard);
//       listItem.appendChild(discardBtn);
  
//       ulListOfGifts.appendChild(listItem);
//       Array.from(ulListOfGifts.children).sort((a,b)=>(a.innerText).localeCompare(b.innerText)).forEach(li => ulListOfGifts.appendChild(li))
  
//       //clear input
//       inputAdd.value = "";
//       function onSend(e) {
//         console.log("send works");
//         let currentLi = e.target.parentNode;
//         let newItemText = currentLi.firstChild.textContent;
//         console.log(newItemText);
        
  
//         let liInSended = document.createElement("li");
//         liInSended.classList.add("gift");
//         liInSended.textContent = newItemText;
//         ulSendGifts.appendChild(liInSended)
//         currentLi.remove();
//       }
//       function onDiscard(event) {
//         console.log("works");
//         console.log("send works");
//         let lastLi = event.target.parentNode;
//         let lastLiTest = lastLi.firstChild.textContent;
//         console.log(lastLiTest);
       
  
//         let liInDiscarded = document.createElement("li");
//         liInDiscarded.classList.add("gift");
//         liInDiscarded.textContent = lastLiTest;
//         ulDiscarded.appendChild(liInDiscarded)
//         lastLi.remove();
//       }
//     }
//   }
  


// function solution() {
//     let addGiftButton = document.querySelector('.card button')
//     addGiftButton.addEventListener('click', onClick)

//     // let allSections = Array.from(document.querySelector('.container').children)
//     let inputBox = document.querySelector('.card input')
//     let ul = document.querySelector('.card ul')

//     function onClick (e){
//         e.preventDefault()
        
//         console.log(inputBox)
//         if (inputBox.value == ''){
//             return
//         }

//         // let item = {
//         //     'li': crElement('li', 'gift', {},inputBox.value), 
//         //     'sendButton': crElement('button', {}, 'sendButton', 'Send'), 
//         //     'discardButton': crElement('button', {}, 'discardButton', 'Discard'), 
            
//         // }
//         let li = document.createElement('li')
//         let buttonSend = document.createElement('button')
//         let buttonDiscard = document.createElement('button')
//         li.setAttribute('class', 'gift')
//         buttonSend.setAttribute('id','sendButton')
//         buttonSend.textContent = 'Send'
//         buttonDiscard.setAttribute('id', 'discardButton')
//         buttonDiscard.textContent = 'Discard'
//         li.textContent = inputBox.value
//         li.appendChild(buttonSend)
//         li.appendChild(buttonDiscard)

//         // item.li.appendChild(item.sendButton)
//         // item.li.appendChild(item.discardButton)

//         // let listOfGifts = allSections[1].querySelector('ul')
//         ul.appendChild(li)
//         Array.from(ul.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(item => ul.appendChild(item))
//         inputBox.value = '';

//         buttonSend.addEventListener('click', send)
//         buttonDiscard.addEventListener('click', discard)

//         function discard(e){
//             e.preventDefault;
//             Array.from(e.target.parentElement.querySelectorAll('button')).forEach(button => button.remove())
//             // let discardList = allSections[3].querySelector('ul')
//             let ulDiscardElement = document.querySelector('.container > section:nth-of-type(4) > ul');
//             ulDiscardElement.appendChild(li)
//             // Array.from(ulDiscardElement.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(item => ulDiscardElement.appendChild(item))
//         }

//         function send(e){
//             e.preventDefault;
//             Array.from(e.target.parentElement.querySelectorAll('button')).forEach(button => button.remove())
//             // let sentGifts = allSections[2].querySelector('ul')
//             let ulSentElement = document.querySelector('.container > section:nth-of-type(3) > ul');
//             ulSentElement.appendChild(li)
//             // Array.from(ulSentElement.children).sort((a, b) => a.innerText.localeCompare(b.innerText)).forEach(item => ulSentElement.appendChild(item))
//         }
        

//         // function crElement(t, classContent, idContent, textContent){
//         //     let tag = document.createElement(t)
//         //     if (tag.tagName == 'LI'){
//         //         tag.setAttribute('class', classContent)
//         //     }else if(tag.tagName == 'BUTTON'){
//         //         tag.setAttribute('id', idContent)
//         //     }
            
//         //     tag.textContent = textContent
//         //     return tag
//         // }
//     }


// }
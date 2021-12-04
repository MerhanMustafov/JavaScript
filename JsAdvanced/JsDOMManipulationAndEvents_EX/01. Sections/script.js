function create(words) {
   let div = document.getElementById('content')
   
   for (let i = 0; i < words.length; i++){
      let word = words[i]
      let newDiv = createDiv(word)
      div.appendChild(newDiv)
   }
   div.addEventListener('click', onClick)

   function onClick(ev){
      if (ev.target.tagName === "DIV" || ev.target.tagName === "P"){
         let paragraph = ev.target.children[0] || ev.target
         let isVisible = paragraph.style.display

         paragraph.style.display = isVisible === "block"
         ? "none" 
         : "block"
      }
      
      // if (ev.target.querySelector('p').style.display == "none"){
      //    ev.target.querySelector('p').style.display = ""
      // }else{
      //    ev.target.querySelector('p').style.display = "none"
      // }
   }

   function createDiv(word){
      let paragraph = document.createElement('p')
      paragraph.textContent = word
      paragraph.style.display = 'none'
      // let style = document.createAttribute('style')
      // style.value = 'display:none;'
      // paragraph.setAttributeNode(style)
      
      

      let div = document.createElement('div')
      div.appendChild(paragraph)
      return div
   }
}



// WHITH mouseover and mouseout events

// function create(words) {
//    let div = document.getElementById('content')
   
//    for (let i = 0; i < words.length; i++){
//       let word = words[i]
//       let newDiv = createDiv(word)
//       div.appendChild(newDiv)
//    }
//    div.addEventListener('mouseover', mouseOver)
//    div.addEventListener('mouseout', mouseOut)

//    function mouseOver(ev){
//       if ( ev.target.querySelector('p').style.display == "none"){
//          ev.target.querySelector('p').style.display = "inline"
         
//       }
 
//    }
//    function mouseOut(ev){
//       console.log(ev.target)
//      if ( ev.target.querySelector('p').style.display == "inline"){
//         ev.target.querySelector('p').style.display = "none"
         
//      }
      
      

//    }

//    function createDiv(word){
//       let paragraph = document.createElement('p')
//       paragraph.textContent = word
//       let style = document.createAttribute('style')
//       style.value = 'display:none;'
//       paragraph.setAttributeNode(style)
      
      

//       let div = document.createElement('div')
//       div.appendChild(paragraph)
//       return div
//    }
// }
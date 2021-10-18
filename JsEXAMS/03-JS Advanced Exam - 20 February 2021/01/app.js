// function solve(){
//    let button = document.querySelector('.site-content')
//    button.addEventListener('click', onClick)


//    let archiveSection = document.querySelector('.archive-section ol')
//    let postArea = document.querySelector('main section')
//    console.log(postArea)
//    let artTitle;
//    function onClick(e){
//       e.preventDefault()
//       if (e.target.classList.contains('create')){
//          let autor = document.querySelector('#creator')
//          let title = document.querySelector('#title')
//          let category = document.querySelector('#category')
//          let content = document.querySelector('#content')
//          if (autor.value && title.value && category.value && content.value){
//             let article = `<article>
//             <h1>${title.value}</h1>
//             <p>Category:
//             <strong>${category.value}</strong>
//             </p>
//             <p>Creator:
//             <strong>${autor.value}</strong>
//             </p>
//             <p>${content.value}</p>
//             <div class="buttons">
//             <button class="btn delete">Delete</button>
//             <button class="btn archive">Archive</button>
//             </div>
//             </article>`

//             postArea.innerHTML += article
//             artTitle = title.value

//             autor.value = '';
//             title.value = '';
//             category.value = '';
//             content.value = '';




//          }
//       }else if (e.target.classList.contains('delete')){
//          e.target.parentElement.parentElement.remove()

//       }else if (e.target.classList.contains('archive')){
//          let li = e.target.parentElement.parentElement.firstElementChild
//          console.log(li)
//          archiveSection.appendChild(li)
//          Array.from(archiveSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => archiveSection.appendChild(li))
//          e.target.disabled = true
//       }
      
//    }
// }
function solve(){
   let button = document.querySelector('.site-content')
   button.addEventListener('click', onClick)


   let archiveSection = document.querySelector('.archive-section ol')
   let postArea = document.querySelector('main section')
   console.log(postArea)
   let artTitle;
   function onClick(e){
      e.preventDefault()
      if (e.target.classList.contains('create')){
         let autor = document.querySelector('#creator')
         let title = document.querySelector('#title')
         let category = document.querySelector('#category')
         let content = document.querySelector('#content')
         let article = `<article>
         <h1>${title.value}</h1>
         <p>Category:
         <strong>${category.value}</strong>
         </p>
         <p>Creator:
         <strong>${autor.value}</strong>
         </p>
         <p>${content.value}</p>
         <div class="buttons">
         <button class="btn delete">Delete</button>
         <button class="btn archive">Archive</button>
         </div>
         </article>`

         postArea.innerHTML += article
         artTitle = title.value

         autor.value = '';
         title.value = '';
         category.value = '';
         content.value = '';




      }else if (e.target.classList.contains('delete')){
         e.target.parentElement.parentElement.remove()

      }else if (e.target.classList.contains('archive')){
         let li = e.target.parentElement.parentElement.firstElementChild.cloneNode(true)
         console.log(li)
         archiveSection.appendChild(li)
         Array.from(archiveSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => archiveSection.appendChild(li))
         
      }
      
   }
}

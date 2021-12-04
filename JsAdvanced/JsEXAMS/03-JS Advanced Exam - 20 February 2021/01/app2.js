function solve(){
    let createBtn = document.querySelector('.create')
    let articleSection = document.querySelector('main section')
    
    createBtn.addEventListener('click', onClick)

    function onClick(e){
        e.preventDefault()
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
    
        articleSection.innerHTML += article
        
        // autor.value = '';
        // title.value = '';
        // category.value = '';
        // content.value = '';

        let deleteBtn = document.querySelector('.delete')
        let archiveBtn = document.querySelector('.archive')

        archiveBtn.addEventListener('click', archiveFunc)
        deleteBtn.addEventListener('click', deleteArticle)

        function archiveFunc(e){
            let ol = document.querySelector('.archive-section ol')
            let li = document.createElement('li')
            li.textContent = e.target.parentElement.parentElement.firstElementChild.textContent
            ol.appendChild(li)
            Array.from(ol.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li))
        }

        function deleteArticle(e){
            e.target.parentElement.parentElement.remove()
            // document.querySelector('aside').remove()
            // document.querySelector('footer').remove()
        }
        
        
    }
 
 }
// function solve(){
//     let button = document.querySelector('.site-content')
//     button.addEventListener('click', onClick)
 
 
//     let archiveSection = document.querySelector('.archive-section ol')
//     let postArea = document.querySelector('main section')
//     console.log(postArea)
//     let artTitle;
//     function onClick(e){
//        e.preventDefault()
//        if (e.target.classList.contains('create')){
//           let autor = document.querySelector('#creator')
//           let title = document.querySelector('#title')
//           let category = document.querySelector('#category')
//           let content = document.querySelector('#content')
//           if (autor.value && title.value && category.value && content.value){
//              let article = `<article>
//              <h1>${title.value}</h1>
//              <p>Category:
//              <strong>${category.value}</strong>
//              </p>
//              <p>Creator:
//              <strong>${autor.value}</strong>
//              </p>
//              <p>${content.value}</p>
//              <div class="buttons">
//              <button class="btn delete">Delete<button>
//              <button class="btn archive">Archive<button>
//              </div>
//              </article>`
 
//              postArea.innerHTML += article
//              artTitle = title.value
 
//              autor.value = '';
//              title.value = '';
//              category.value = '';
//              content.value = '';
 
 
 
 
//           }
//        }else if (e.target.classList.contains('delete')){
//           e.target.parentElement.parentElement.remove()
 
//        }else if (e.target.classList.contains('archive')){
//           let li = document.createElement('li')
//           li.textContent = e.target.parentElement.parentElement.firstElementChild.textContent
//           archiveSection.appendChild(li)
//           Array.from(archiveSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => archiveSection.appendChild(li))
          
//        }
       
//     }
//  }
 
import {createSection, createExtra} from './createElements.js'
window.onload = solution


async function solution() {
    const titles = await getAllTitlesOfSections()
    visualizeSections(titles)

    let contents = await getContentOfAllSections()
    document.querySelectorAll('.button')
    .forEach(b => b.addEventListener('click', (event) => {onClick(event, contents)})) 
}

function onClick(e, contents){
    const isInfoAdded = e.target.parentElement.nextElementSibling
    if (isInfoAdded){
        if (e.target.textContent == "MORE"){
            e.target.textContent = "LESS"
            e.target.parentElement.nextElementSibling.style.display = 'block'
        }else if (e.target.textContent == "LESS"){
            e.target.textContent = "MORE"
            e.target.parentElement.nextElementSibling.style.display = 'none'
        }
        return;
    }else{
        const serachingFor = e.target.previousElementSibling.textContent
        let section = e.target.parentElement.parentElement

        let curC = Object.entries(contents).filter(c => c[1].title == serachingFor)[0][1].content
        const extra = createExtra(curC)
        section.appendChild(extra)
        e.target.textContent = "LESS"
        extra.style.display = 'block'
        
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function getAllTitlesOfSections(){
    try{
        const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
        if(res.status != 200){
            throw new Error(`${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        return data
    }catch (err) {
        console.log(err)
    }
}

async function getContentOfAllSections(){
    try{
        const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/`)
        if (res.status != 200){
            throw new Error (`${res.status} ${res.statusText}`)
        }
        const data = await res.json()
        // console.log(data)
        return data
    }catch (err) {
        console.log(err)
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function visualizeSections(titles){
    const main = document.getElementById('main')

    titles.forEach(d => {
        let section = createSection(d)
        main.appendChild(section)
    })
}





// let btns = document.querySelectorAll('.button')
// btns.forEach(b => {
//     b.addEventListener('click', function(e){
//         onClick(e, content)
//     })
// })
   
const container = document.querySelector('.container')
export function changeView(section){
    container.replaceChildren(section)
}
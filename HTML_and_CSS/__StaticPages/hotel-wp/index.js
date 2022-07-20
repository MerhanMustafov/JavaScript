const page = document.querySelector('#root')

page.addEventListener('mousemove', (e) => { 
    let currentPosX = e.target.scrollLeft
    console.log('event: ', e)
    console.log(currentPosX)
    console.log('currentPosX')
})
function drag() {
    
}
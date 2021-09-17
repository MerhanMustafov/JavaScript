function toggle() {
    let button = document.querySelector('.button')
    // console.log(button)
    let text = document.querySelector('#extra')
    // console.log(text.style.display)
    text.style.display = (text.style.display === "none" || text.style.display === "") ? "block" : "none"
    button.textContent = button.textContent == "More" ? "Less" : "More"
    
}
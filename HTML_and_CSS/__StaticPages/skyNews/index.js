let moreCheckbox = document.getElementById('more')

document.addEventListener('click', (e) => {
        const more = document.querySelector('.moree')
    if(e.target.checked){
        console.log(more)
            more.classList.add('show')

    }else{
            more.classList.remove('show')

    }
})
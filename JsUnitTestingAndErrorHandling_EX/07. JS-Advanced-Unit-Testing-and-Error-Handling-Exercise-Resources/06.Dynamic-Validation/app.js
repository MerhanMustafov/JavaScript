function validate() {
    const input = document.getElementById('email')
    const pattern = /^[a-z]+@[a-z]+.[a-z]+$/gm;

    input.addEventListener('change', (e) => {
        if(!pattern.test(input.value)){
            input.classList.add('error')
        }else{
            input.removeAttribute('class')
        }
    })
}
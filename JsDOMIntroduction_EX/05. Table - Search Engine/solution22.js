function solve(){
    let button = document.querySelector('#searchBtn')
    
    button.addEventListener('click', () => {
        let rows = document.querySelectorAll('tbody tr')
        let input = document.getElementById('searchField').value.toLowerCase()
       
        for (let row of rows){
            if (row.innerHTML.toLowerCase().includes(input)){
                row.setAttribute('class', 'select')
            }else{
                row.removeAttribute('class')
            }
            
        }
    })
   
}
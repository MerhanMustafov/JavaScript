function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    console.log(rows)
    for (let row of rows){
        
        if (row.children[1].textContent == email){
            row.parentNode.removeChild(row)
            document.querySelector('#result').textContent = "Deleted"
            return
        }
        
    }
    
    document.querySelector('#result').textContent = "Not found." 
}
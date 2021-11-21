export function onClick() {
    const searchFor = document.getElementById('searchField');
    
    if (searchFor.value && searchFor.value != " ".repeat(searchFor.value.length)){
        
        const rows = document.querySelectorAll('tbody tr');
        let has = false;
        {[...rows].forEach(row => {
            const rowCells = [...row.children]
            rowCells.forEach(cell => {
                const cellContent = cell.textContent.trim().replace(/\s/g, "")
                const contentInput = searchFor.value.trim().replace(/\s/g, "")
                if (~cellContent.toLowerCase().indexOf(contentInput.toLowerCase())){
                    cell.parentElement.className = 'select'
                    has = true
            
                }else if (!has){
                    cell.parentElement.removeAttribute('class')
                }
            })
            has = false
        })}
    }

}
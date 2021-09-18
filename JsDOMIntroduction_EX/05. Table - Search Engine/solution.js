function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');
   
   function onClick() {
      const input = document.querySelector('#searchField').value.toLocaleLowerCase()
      // console.log(rows);
      // console.log(input);
      for (let row of rows){
         if ((row.textContent).toLocaleLowerCase().includes(input)){
            row.setAttribute('class', 'select')
         }else {
            row.removeAttribute('class')
         }
      }

   }
}
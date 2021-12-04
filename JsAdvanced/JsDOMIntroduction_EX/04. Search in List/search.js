function search() {
   let towns = [...document.querySelectorAll('#towns li')]
   let input = document.getElementById('searchText').value
   // console.log(input);
   let count = 0
   for (let i = 0; i < towns.length; i++){
      let currentTown = towns[i].innerHTML;
      if (currentTown.includes(input)){
         towns[i].style = "font-weight: bold; text-decoration: underline;"
         count += 1
      }else{
         towns[i].style = "font-weight: ; text-decoration: ;"
      }
      // style="font-weight: bold;"
      // style="text-decoration: underline;"
   }
   document.getElementById('result').textContent = `${count} matches found`
   
   // console.log(towns)
}

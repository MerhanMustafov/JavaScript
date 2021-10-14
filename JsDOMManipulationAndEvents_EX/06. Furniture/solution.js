function solve() {
  
  let window = document.querySelector('#exercise')
  let textareas = window.querySelectorAll('textarea')

  Array.from(document.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', onClick));

  function onClick(ev){
    
    if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Generate'){
      let tableBody = window.querySelector('.table')
      let data = JSON.parse(textareas[0].value)
      data.forEach(furniture => {
        tableBody.innerHTML += `<tr>
            <td><img src = ${furniture.img}></td>
            <td><p>${furniture.name}</p></td>
            <td><p>${furniture.price}</p></td>
            <td><p>${furniture.decFactor}</p></td>
            <td><input type="checkbox"/></td>
            </tr>`
    })
  }else{
    let furnitures = [];
    let totalPrice = 0;
    let averageDecFactor = 0;
    Array.from(document.querySelectorAll("input:checked")).forEach(furniture => {
      let tr = furniture.parentElement.parentElement
      furnitures.push(tr.children[1].children[0].textContent)
      console.log('Short:',tr.children[1].textContent)
      console.log('Long:',tr.children[1].children[0].textContent)
      totalPrice += Number(tr.children[2].children[0].textContent)
      averageDecFactor += Number(tr.children[3].children[0].textContent)
    })
    textareas[1].textContent += `Bought furniture: ${furnitures.join(', ')}\n`
    textareas[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`
    textareas[1].textContent += `Average decoration factor: ${averageDecFactor / furnitures.length}`

  }
}
}
/*
function solve() {
  let textarea = document.querySelectorAll('textarea');
  let tbody = document.querySelector('tbody');
 
  [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));
  function execute(btn) {
    if (!textarea[0].value) return;
    if (btn.target.textContent === 'Generate') {
      let input = JSON.parse(textarea[0].value);
      input.forEach(furniture => {
        tbody.innerHTML += `<tr>
          <td><img src=${furniture.img}></td>
          <td><p>${furniture.name}</p></td>
          <td><p>${furniture.price}</p></td>
          <td><p>${furniture.decFactor}</p></td>
          <td><input type="checkbox"/></td>
          </tr>`
      })
    } else {
      let furnitureName = [];
      let totalPrice = 0;
      let averageDecFactor = 0;
      [...document.querySelectorAll('input:checked')]
        .forEach(furniture => {
          let parentRow = furniture.parentNode.parentNode;
          averageDecFactor += Number(parentRow.children[3].textContent);
          totalPrice += Number(parentRow.children[2].textContent);
          furnitureName.push(parentRow.children[1].textContent);
        });
      textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
      textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}`;
    }
  }
}
*/
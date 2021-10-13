function solve() {
  //take textarea tag
  let output = document.querySelector('#exercise')
  .querySelector('textarea')
  
  let buttonGenerate = document.querySelector('#exercise')
  .querySelectorAll('button')[0]

  buttonGenerate.addEventListener('click', creatRow)

  let buttonBuy = document.querySelector('#exercise')
  .querySelectorAll('button')[1]

  buttonBuy.addEventListener('click', report)
  
  
  let table = document.querySelector('.table')
  console.log(table)
  let tableBody = table.querySelector('tbody')

  function report(){
    

    let rows = tableBody.children
    let finalReport = {
      'furnitures': [],
      'totalPrice': 0,
      'averageDecFactor': 0
    }
    let countAverageDecfactor = 0
    for (let row of rows){
      let x = Array.from(row.querySelectorAll('td'))
      console.log(x)
      if (x[4].children[0].checked){
        finalReport.furnitures.push(x[1].children[0].textContent)
        finalReport.totalPrice += Number(x[2].children[0].textContent)
        finalReport.averageDecFactor +=  Number(x[3].children[0].textContent)
        countAverageDecfactor += 1
      }
     
    }

    let output2 = document.querySelector('textarea[rows="4"]')
    console.log(output2)
    output2.textContent = `Bought furniture: ${finalReport.furnitures.join(', ')}\nTotal price: ${finalReport.totalPrice.toFixed(2)}\nAverage decoration factor: ${finalReport.averageDecFactor / countAverageDecfactor}`

  }

  function creatRow(ev){
    let data = JSON.parse(output.value)[0]
    
    
    // creat elements 
    let tr = document.createElement('tr')

    let tdImage = document.createElement('td')
    let img = document.createElement('img')
    img.setAttribute('src', data.img)
    tdImage.appendChild(img)
    tr.appendChild(tdImage)

    let tdName = document.createElement('td')
    let parName = document.createElement('p')
    parName.textContent = data.name
    tdName.appendChild(parName) 
    tr.appendChild(tdName)

    let tdPrice = document.createElement('td')
    let parPrice = document.createElement('p')
    parPrice.textContent = data.price
    tdPrice.appendChild(parPrice) 
    tr.appendChild(tdPrice)

    let tdDecFactor = document.createElement('td')
    let parDecFactor = document.createElement('p')
    parDecFactor.textContent = data.decFactor
    tdDecFactor.appendChild(parDecFactor) 
    tr.appendChild(tdDecFactor)

    

    let tdCheckBox = document.createElement('td')
    let inputEl = document.createElement('input')
    inputEl.setAttribute("type", 'checkbox')
    tdCheckBox.appendChild(inputEl)
    tr.appendChild(tdCheckBox)

    tableBody.appendChild(tr)
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
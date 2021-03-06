window.addEventListener('load', solution);


function solution() {
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let code = document.getElementById("code");

  submitBtn = document.querySelector("#submitBTN");
  infoPreview = document.getElementById("infoPreview");
  editBtn = document.querySelector("#editBTN");
  continueBTN = document.querySelector("#continueBTN");

  submitBtn.addEventListener("click", submit);

  function submit(e) {
    if (name.value == "" || email.value == "") {
      return;
    }

    // на първото ли беше добавил един спейс повече
    let construction = `<li>Full Name: ${name.value}</li>
      <li>Email: ${email.value}</li>
      <li>Phone Number: ${phone.value}</li>
      <li>Address: ${address.value}</li>
      <li>Postal Code: ${code.value}</li>`;

    infoPreview.innerHTML = construction;

    let saveN = name.value;
    let saveE = email.value;
    let saveP = phone.value;
    let saveA = address.value;
    let saveC = code.value;

    name.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBTN.disabled = false;

    continueBTN.addEventListener("click", deleteAll);
    editBtn.addEventListener("click", editField);

    function editField(e) {
      name.value = saveN;
      email.value = saveE;
      phone.value = saveP;
      address.value = saveA;
      code.value = saveC;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBTN.disabled = true;

      // Заради джъдж тук трябва да е Array.from(...)
      let allLi = Array.from(document.querySelectorAll("#infoPreview li"));
      allLi.forEach((element) => {
        element.remove();
      });
    }

    function deleteAll(e) {
      hElement = document.createElement("h3");
      hElement.textContent = 'Thank you for your reservation!'
      divElement = document.getElementById("block");
      while (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild);
      }

      divElement.appendChild(hElement)
    }
  }
}

// function solution() {
//   let name = document.getElementById("fname");
//   let email = document.getElementById("email");
//   let phone = document.getElementById("phone");
//   let address = document.getElementById("address");
//   let code = document.getElementById("code");

//   let submitBtn = document.querySelector("#submitBTN");
//   let infoPreview = document.getElementById("infoPreview");
//   let editBtn = document.querySelector("#editBTN");
//   let continueBTN = document.querySelector("#continueBTN");

//   submitBtn.addEventListener("click", submit);

//   function submit(e) {
//     if (name.value == "" || email.value == "") {
//       return;
//     }


//     let construction = `<li>Full Name: ${name.value}</li>
//       <li>Email: ${email.value}</li>
//       <li>Phone Number: ${phone.value}</li>
//       <li>Address: ${address.value}</li>
//       <li>Postal Code: ${code.value}</li>`;

//     infoPreview.innerHTML = construction;

//     let saveN = name.value;
//     let saveE = email.value;
//     let saveP = phone.value;
//     let saveA = address.value;
//     let saveC = code.value;

//     name.value = "";
//     email.value = "";
//     phone.value = "";
//     address.value = "";
//     code.value = "";

//     submitBtn.disabled = true;
//     editBtn.disabled = false;
//     continueBTN.disabled = false;

//     continueBTN.addEventListener("click", deleteAll);
//     editBtn.addEventListener("click", editField);

//     function editField(e) {
//       name.value = saveN;
//       email.value = saveE;
//       phone.value = saveP;
//       address.value = saveA;
//       code.value = saveC;

//       submitBtn.disabled = false;
//       editBtn.disabled = true;
//       continueBTN.disabled = true;

//       let allLi = Array.from(document.querySelectorAll("#infoPreview li"));
//       allLi.forEach((element) => {
//         element.remove();
//       });
//     }

//     function deleteAll(e) {
//       let hElement = document.createElement("h3");
//       hElement.textContent = 'Thank you for your reservation!'
//       let divElement = document.getElementById("block");
//       // while (divElement.firstChild) {
//       //   divElement.removeChild(divElement.firstChild);
//       // }
//       divElement.innerHTML = ''

//       divElement.appendChild(hElement)
//     }
//   }
// }

// function solution() {
//   document.querySelector('#block').addEventListener('click', onClick)
  
//   let preview = document.querySelector('#infoPreview')
//   let buttonEdit = document.querySelector('#editBTN')
//   let buttonContinue = document.querySelector('#continueBTN')
//   let buttonSubmit = document.querySelector('#submitBTN')

//   function onClick(e){
//     if (e.target.id == 'submitBTN'){
//       let inputs = Array.from(document.querySelector('#form').children).slice(0, -1).map(el => el.lastElementChild.value)
//       let lables = Array.from(document.querySelector('#form').children).slice(0, -1).map(el => el.firstElementChild.textContent)

//       if (inputs[0] && inputs[1]){
//         for (let i = 0; i < lables.length; i++){
//           let tag = cElement('li', lables[i], inputs[i])
//           preview.appendChild(tag)
  
//         }
//         Array.from(document.querySelector('#form').children).slice(0, -1).forEach(el => el.lastElementChild.value = '')
 
//         buttonSubmit.disabled = true, buttonContinue.disabled = false, buttonEdit.disabled = false

//       }
      
//     }else if(e.target.id == 'editBTN'){
//       let liElements = Array.from(preview.children)
//       liElements.forEach(el => el.remove())
//       let divs =Array.from(document.querySelector('#form').children)

//       for (let i = 0; i < divs.length-1; i++){
//         divs[i].lastElementChild.value  = liElements[i].textContent.split(': ')[1].trim()
//       }

//       buttonContinue.disabled = true, buttonEdit.disabled = true, buttonSubmit.disabled = false
      
//     }else if(e.target.id == 'continueBTN'){
//       let block = document.querySelector('#block')
//       block.innerHTML = ''
//       let h3 = cElement('h3', '', 'Thank you for your reservation!')
//       block.appendChild(h3)
//     }

//     function cElement(tag, caption, content, atr, atrContent){
//       let elemnt = document.createElement(tag)
//       if (caption){
//         elemnt.textContent = `${caption} `
//       }if (content){
//         elemnt.textContent += `${content}`
//       }
//       if (atr){
//         elemnt.setAttribute(atr, atrContent)
//       }
//       return elemnt
//     }    
//   }
// }



// function solution() {
//   // console.log('TODO: Write the missing functionality!');

//   let button = document.querySelector('#block')
//   console.log(button)

//   button.addEventListener('click', onClick)

  
//   inputName = document.querySelector('#fname'),
//   inputEmail = document.querySelector('#email'),
//   inputPhoneNum = document.querySelector('#phone'),
//   inputAddress = document.querySelector('#address'),
//   inputPostalCode = document.querySelector('#code')
  

  

//   let preview = document.querySelector('#infoPreview')
//   let buttonEdit = document.querySelector('#editBTN')
//   let buttonContinue = document.querySelector('#continueBTN')
//   let buttonSubmit = document.querySelector('#submitBTN')
//   let inputs = []
  
//   function onClick(e){
//     e.preventDefault()
//     // console.log(e.target.tagName)
//     // console.log(e.target.id)
    
//     if (e.target.tagName == "INPUT" && e.target.id == 'submitBTN'){
//       if (inputName.value && inputEmail.value){
//         let info = `
//         <li>Full Name: ${inputName.value}</li>
//         <li>Email: ${inputEmail.value}</li>
//         `

//         console.log(inputPhoneNum)
        
//         info += `<li>Phone Number: ${inputPhoneNum.value}</li>`
        
//         info += `<li>Address: ${inputAddress.value}</li>`
        
//         info += `<li>Postal Code: ${inputPostalCode.value}</li>`
        
        
//         info += `<div class = "actions">...</div>`
//         preview.innerHTML = info

//         let iName = inputName.value 
//         let iEmail = inputEmail.value 
//         let iPhNu = inputPhoneNum.value
//         let iAddress = inputAddress.value 
//         let iPc = inputPostalCode.value 

//         inputs.push(iName)
//         inputs.push(iEmail)
//         inputs.push(iPhNu)
//         inputs.push(iAddress)
//         inputs.push(iPc)



//         inputName.value = ''
//         inputEmail.value  =''
//         inputPhoneNum.value =''
//         inputAddress.value  =''
//         inputPostalCode.value  =''

//         buttonSubmit.disabled = true
//         buttonContinue.disabled = false
//         buttonEdit.disabled = false


//       }
      
//     }else if(e.target.tagName == "INPUT" && e.target.id == 'editBTN'){

//       let liElements = Array.from(preview.children)
//       // let ul = Array.from(preview.children)
//       liElements.forEach(li => li.remove())
//       for (let i = 0; i < 5; i++){
//         if (i == 0){
//           inputName.value = inputs[i]
//         }else if (i == 1){
//           inputEmail.value  =inputs[i]
//         }else if (i == 2 && liElements[i]){
//           inputPhoneNum.value  =inputs[i]
//         }else if (i == 3 && liElements[i]){
//           inputAddress.value  =inputs[i]
//         }else if (i == 4 && liElements[i]){
//           inputPostalCode.value = inputs[i]
//         }
//       }
//       buttonContinue.disabled = true
//       buttonEdit.disabled = true

//       buttonSubmit.disabled = false
      
//     }else if(e.target.tagName == "INPUT" && e.target.id == 'continueBTN'){
//       let block = document.querySelector('#block')
//       // Array.from(block.children).forEach(el => el.remove()) --->88/100 #07incorect answer
//       block.innerHTML = ''
//       let h3 = document.createElement('h3')
//       h3.textContent = 'Thank you for your reservation!'
//       block.appendChild(h3)
      
      
      
      
      
//       // block.innerHTML = `<h3>Thank you for your reservation!</h3>`
//     }
    
//   }
// }




// 100/100
// function solution() {
//   // console.log('TODO: Write the missing functionality!');

//   let button = document.querySelector('#block')
//   // console.log(button)

//   button.addEventListener('click', onClick)


//   let inputName = document.querySelector('#fname')
//   let inputEmail = document.querySelector('#email')
//   let inputPhoneNum = document.querySelector('#phone')
//   let inputAddress = document.querySelector('#address')
//   let inputPostalCode = document.querySelector('#code')

//   let preview = document.querySelector('#infoPreview')
//   let buttonEdit = document.querySelector('#editBTN')
//   let buttonContinue = document.querySelector('#continueBTN')
//   let buttonSubmit = document.querySelector('#submitBTN')

  
//   function onClick(e){
//     if (e.target.id == 'submitBTN'){
//       if (inputName.value && inputEmail.value){
//         let info = `<li>Full Name: ${inputName.value}</li>
//         <li>Email: ${inputEmail.value}</li>
//         `

//         if (inputPhoneNum.value){
//           info += `<li>Phone Number: ${inputPhoneNum.value}</li>`
//         }
//         if (inputAddress.value){
//           info += `<li>Address: ${inputAddress.value}</li>`
//         }
//         if (inputPostalCode.value){
//           info += `<li>Postal Code: ${inputPostalCode.value}</li>`
//         }
        
//         info += `<div class = "actions"></div>`
//         preview.innerHTML = info


//         inputName.value = ''
//         inputEmail.value  =''
//         inputPhoneNum.value =''
//         inputAddress.value  =''
//         inputPostalCode.value  =''

//         buttonSubmit.disabled = true
//         buttonContinue.disabled = false
//         buttonEdit.disabled = false


//       }
      
//     }else if(e.target.id == 'editBTN'){

//       let liElements = Array.from(preview.children)
//       let ul = Array.from(preview.children)
      
//       for (let i = 0; i < 5; i++){
//         if (i == 0){
//           inputName.value = liElements[i].textContent.split(': ')[1]

//         }else if (i == 1){
//           inputEmail.value  =liElements[i].textContent.split(': ')[1]
//         }else if (i == 2 && liElements[i]){
//           inputPhoneNum.value  =liElements[i].textContent.split(': ')[1]
//         }else if (i == 3 && liElements[i]){
//           inputAddress.value  =liElements[i].textContent.split(': ')[1]
//         }else if (i == 4 && liElements[i]){
//           inputPostalCode.value  =liElements[i].textContent.split(': ')[1]
//         }
//       }
//       ul.forEach(li => li.remove())
//       buttonContinue.disabled = true
//       buttonEdit.disabled = true

//       buttonSubmit.disabled = false
      
//     }else if(e.target.id == 'continueBTN'){
//       let block = document.querySelector('#block')
//       Array.from(block.children).forEach(el => el.remove())
//       block.innerHTML = `<h3>Thank you for your reservation!</h3>`
//     }
    
//   }
// }
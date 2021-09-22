// function addItem() {
//     let valueOfInbox = document.querySelector('#newItemText').value
//     // console.log(valueOfInbox); 
//     if (valueOfInbox){
//         document.querySelector('#items').innerHTML += `<li>${valueOfInbox}</li>`
//     }
    
// }
function addItem() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));

    document.getElementById("items").appendChild(li);
      //clearing the input:
    document.getElementById('newItemText').value = '';
  } 
  
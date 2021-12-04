// function deletItem(){
//     let liTags = document.querySelector('items li');
//     console.log(liTags)
//     liTags.remove.href= '#'

// }
// function addItem() {
//     let valueOfInbox = document.querySelector('#newItemText').value;
//     if (valueOfInbox){
//         document.querySelector('#items').innerHTML += `<li>${valueOfInbox}<a href="#" class="deleteURL" onclick="deletItem()">[Delete]</a></li>`
//     }
//     let del = document.querySelector('.deleteURL')
//     console.log(del)
// }

function addItem() {
    let newElement = document.getElementById("newItemText").value;
    console.log(newElement )
    let list = document.getElementById("items");
    console.log(list)
    if (newElement.length === 0) return;
    let listItem = document.createElement("li");
    console.log(listItem)
    listItem.textContent = newElement;
    let remove = document.createElement("a");
    console.log(remove)
    let linkText = document.createTextNode("[Delete]");
    console.log(linkText)
    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);

    listItem.appendChild(remove);
    list.appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }
}
export function createRow(id, a, t){
    const row = document.createElement('tr');
    row.id = id
    const title = document.createElement('td');
    title.textContent = t;
    const author = document.createElement('td');
    author.textContent = a
    const buttons = document.createElement('td');
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit"
    // editBtn.id = id
    editBtn.className = 'edit'
    const deleteBtn = document.createElement('button');
    // deleteBtn.id = id
    deleteBtn.textContent = "Delete"
    deleteBtn.className = 'del'

    buttons.appendChild(editBtn); buttons.appendChild(deleteBtn)
    row.appendChild(title); row.appendChild(author); row.appendChild(buttons)
    return row

}


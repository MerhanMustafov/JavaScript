import { html } from "./lib.js"

export const loadTemplate = () => html`<button id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        
    </tbody>
</table>

<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>

<form id="edit-form" style="display: none">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save">
</form>`





export const loadBooksTemplate = (data) => html`<tr id=${data._id}>
<td>${data.title}</td>
<td>${data.author}</td>
<td>
    <button class = "edit">Edit</button>
    <button class = "del">Delete</button>
</td>
</tr>`
import { getMyItems } from "../api/data.js";
import { html } from "../lib.js";
import {getUserData} from "../api/utils.js"



const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">
        ${books.map(booksTemplate)}
    </ul>
    ${books.length == 0 ? html`<p class="no-books">No books in database!</p>` : null}
</section>
`;

const booksTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;

export async function myBooks(ctx){
    const userData = getUserData()
    const myBooks = await getMyItems(userData.id)
    ctx.render(myBooksTemplate(myBooks))
}
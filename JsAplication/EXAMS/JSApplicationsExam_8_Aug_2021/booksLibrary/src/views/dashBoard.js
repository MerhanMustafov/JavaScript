import { getAll } from "../api/data.js";
import { html } from "../lib.js";


const dashBoardTemplate = (books) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">
        ${books.map(bookTemplate)}
    </ul>
    ${books.length == 0 ? html`<p class="no-books">No books in database!</p>` : null}
</section>
`;

const bookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/details/${book._id}">Details</a>
</li>
`;

export async function dashboard(ctx){
    const books = await getAll()
    ctx.render(dashBoardTemplate(books))

}
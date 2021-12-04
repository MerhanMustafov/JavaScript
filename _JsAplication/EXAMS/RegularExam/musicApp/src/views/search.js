import {html} from "../lib.js"
import { getByName } from "../api/data.js"
import { getUserData } from "../api/utils.js"


const searchTemplate = (albums, userData) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <div class="search-result">
        ${albums.length == 0 ? html`<p class="no-result">No result.</p>` : albums.map(a => albumCard(a, userData))}
        
    </div>
</section>
`;

const albumCard = (album, userData) => html`
<div class="card-box">
    <img src="${album.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        ${userData != null ? html`<div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>` : null}
        
    </div>
</div>
`;
export async function searchPage(ctx){
    const userData = getUserData()
    update([])
    function update(albums){
        ctx.render(searchTemplate(albums, userData))
    }

    document.querySelector('.button-list').addEventListener('click', onSearch)
    async function onSearch(){
        const input = document.querySelector('#search-input')
        const name = input.value
        const albums = await getByName(name)
        update(albums)
    }
}






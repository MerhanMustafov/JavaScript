import { html } from "../lib.js";
import { getAlbumById } from "../api/data.js";
import { getUserData } from "../api/utils.js";


const detailsTemplate = (album, isOwner, userData) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${album.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${isOwner == true   ? html` <div class="actionBtn">
                                            <a href="/edit/${album._id}" class="edit">Edit</a>
                                            <a href="/delete/${album._id}" class="remove">Delete</a>
                                        </div>`
                                : null}
            
        </div>
    </div>
</section>
`;


export async function detailsPage(ctx){
    const userData = getUserData()
    const album = await getAlbumById(ctx.params.id)

    const isOwner = userData && userData.id == album._ownerId

    update()
    async function update(){
        ctx.render(detailsTemplate(album, isOwner, userData))
    }
}




import { html, render } from "./lib.js";
import { cats } from "./catSeeder.js";


const catsTemplate = (cat, onStatus) => html`<li>
<img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
    <button class="showBtn" @click=${onStatus}>Show status code</button>
    <div class="status" style="display: none" id=${cat.id}>
        <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
        <p class="card-text">${cat.statusMessage}</p>
    </div>
</div>
</li>`;


onload();
function onload() {
  const catSection = document.getElementById("allCats"); 
  const ul = document.createElement("ul"); ul.id = "cats"; 
  catSection.appendChild(ul);
    
  render(cats.map((cat) => catsTemplate(cat, onStatus)), ul);
}

function onStatus(e) {
    if (e.target.tagName == 'BUTTON'){
        const showStatusCode = e.target.parentElement.querySelector('.status')
      if(showStatusCode.style.display == 'none'){showStatusCode.style.display = 'block'}
      else{showStatusCode.style.display = 'none'}
    }
}

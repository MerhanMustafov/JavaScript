import {contacts} from './contacts.js';
import {html, render} from './node_modules/lit-html/lit-html.js';



const contactTemplate = (data, onDetail) => html`<div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${data.name}</h2>
                <button class="detailsBtn" @click=${(e) => onDetail(e, data)}>Details</button>
                <div class="details" id=${data.id} style="display: none;">
                    <p><span>Phone number:</span> ${data.phoneNumber}</p>
                    <p><span>Email:</span>> ${data.email}</p>
                </div>
            </div>
        </div>`

onLoadPage()
function onLoadPage(){
    const div = document.getElementById('contacts');
    render(contacts.map(c => contactTemplate(c, onDetail)), div)
}

function onDetail(e, contactData){
    const detailInfo = e.target.parentElement.querySelector('.details');
    if (detailInfo.style.display == 'none'){detailInfo.style.display = 'block';}
    else{detailInfo.style.display = 'none';}
}
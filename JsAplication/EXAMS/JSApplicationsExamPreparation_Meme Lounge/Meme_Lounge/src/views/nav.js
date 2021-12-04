import { getUserData } from '../api/utils.js';
import {html, render} from '../lib.js';

const navTemplate = (email) => html`
<a href="/allMemes">All Memes</a>
<!-- Logged users -->
<div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile logged">
        <span id=email>Welcome, ${email}</span>
        <a href="/userProfile">My Profile</a>
        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>
</div>
<!-- Guest users -->
<div class="guest">
    <div class="profile notLogged">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/home">Home Page</a>
</div>
`;

const nav = document.querySelector('nav')
export function updateNav(){
    const userData = getUserData()
    const email = userData!= null ? userData.email : ''
    render(navTemplate(email), nav)
}
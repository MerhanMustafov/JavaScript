import { getUserData } from '../api/utils.js';
import {html, render} from '../lib.js';

const navTemplate = (email) => html`
    <!-- Logged users -->
<div class="user">
    <a href="/allMemes">All Memes</a>
    <a href="/create">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${email}</span>
        <a href="/myProfile">My Profile</a>
        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>
</div>
<!-- Guest users -->
<div class="guest">
    <a class="active" href="/home">Home Page</a>
    <a href="/allMemes">All Memes</a>
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
</div>
`;

const nav = document.querySelector('nav')
export function updateNav(){
    const email = getUserData() != null ? getUserData().email : ''
    render(navTemplate(email), nav)
}
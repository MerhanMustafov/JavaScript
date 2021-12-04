import {onload, onClick} from './lib.js'
function solve() {
   // on loadPage
   onload()

   // on clicking search button
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
}

solve()
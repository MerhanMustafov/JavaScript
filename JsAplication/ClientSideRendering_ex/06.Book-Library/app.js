import {render, loadTemplate, onSave, onSubmit, loadBooks, onClick} from './lib.js'

const body = document.querySelector('body')
render(loadTemplate(), body)

const loadBtn = document.getElementById('loadBooks'); 
loadBtn.addEventListener('click', loadBooks);

const formAdd = document.getElementById('add-form'); 
formAdd.addEventListener('submit', onSubmit);

const formEdit = document.getElementById('edit-form'); 
formEdit.addEventListener('submit', onSave);

const tbody = document.querySelector('tbody'); 
tbody.addEventListener('click', onClick);

import {html, render} from './node_modules/lit-html/lit-html.js'

import {get, getBookById, post, put, del} from './requests.js'

import {loadTemplate, loadBooksTemplate} from './templates.js'

import {onSave, onSubmit, loadBooks, onClick} from './onMainPage.js'



export {html, render,
        get, getBookById, post, put, del, 
        loadTemplate, loadBooksTemplate, 
        onSave, onSubmit, loadBooks, onClick
    }
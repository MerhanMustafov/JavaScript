import { html } from './htmlElements.js'
export function rotateForms(){
    if (html.saveForm.style.display == 'block' && html.submitForm.style.display == 'block'){
        html.saveForm.style.display = 'none'
        html.submitForm.style.display = 'block'
    }
    if (html.saveForm.style.display == 'none'){
        html.saveForm.style.display = 'block'
        html.submitForm.style.display = 'none'
    }else{
        html.saveForm.style.display = 'none'
        html.submitForm.style.display = 'block'
    }
}

export function getSaveFormTitle(string){
    if (string == 'title'){
        return html.saveForm.querySelector('[name="title"]')
    }
    else if (string == 'author'){
        return html.saveForm.querySelector('[name="author"]')
        
    }
}

export function getSubmitFormTitle(string){
    if (string == 'title'){
        return html.submitForm.querySelector('[name="title"]')
    }
    else if (string == 'author'){
        return html.submitForm.querySelector('[name="author"]')
        
    }
}
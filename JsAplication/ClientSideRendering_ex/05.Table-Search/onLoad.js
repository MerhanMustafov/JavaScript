import {html,render, getData} from './lib.js'

const tbody = document.querySelector('tbody');
export async function onload(){
    const data = await getData()
    render(Object.values(data).map(rowData => rowTemplate(rowData)), tbody)
}



const rowTemplate = (data) => html`<tr>
                <td>${data.firstName} ${data.lastName}</td>
                <td>${data.email}</td>
                <td>${data.course}</td>
            </tr>`
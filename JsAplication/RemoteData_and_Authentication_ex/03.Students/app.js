import {create as cRow} from './createRow.js'


document.getElementById('submit').addEventListener('click', onClick)
const tbody = document.querySelector('#results tbody')
const url = `http://localhost:3030/jsonstore/collections/students`
load()

async function load(){
    const res = await fetch(url)
    const data = await res.json()
    Object.values(data).map(info => cRow(info)).forEach(row => tbody.appendChild(row))
}

function onClick(e){
    const form = document.querySelector('#form');
    form.addEventListener('submit', async (e) => { 

        e.preventDefault()
        console.log(e.target.querySelector('.inputs'))
        
        let data = new FormData(form)
        addNewStudent(data)
        // console.log([...data.entries()])
    })
}

async function addNewStudent(stInfo){

    try{
        let firstName = stInfo.get('firstName')
        let lastName = stInfo.get('lastName')
        let facultyNumber = stInfo.get('facultyNumber')
        let grade = stInfo.get('grade')
        if((typeof firstName == "string" && firstName.length > 0 && isNaN(firstName)) 
        && (typeof lastName == "string" && lastName.length > 0 && isNaN(lastName))
        && (typeof facultyNumber == "string" &&  !isNaN(facultyNumber) && facultyNumber.length > 0)
        && (!isNaN(grade) && typeof grade == 'string' && grade.length > 0)){
            const student = {firstName, lastName, facultyNumber, grade}
            const option = {
                method: "post",
                headers: {"Content-Type": "aplication/json"},
                body: JSON.stringify(student)
            }
            let res = await fetch(url, option)
            
            const tr = cRow(student)
            tbody.appendChild(tr)
            
        }else{
            throw new Error (`Incorect input`)
        }
    }catch (err) {
        alert(err);
    }
}
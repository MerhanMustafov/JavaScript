export function create(info){
    let tr = document.createElement('tr');
    let fName = document.createElement('td');
    fName.textContent = info.firstName
    let lName = document.createElement('td');
    lName.textContent = info.lastName
    let fNum = document.createElement('td');
    fNum.textContent = info.facultyNumber
    let grade = document.createElement('td');
    grade.textContent = info.grade
    tr.appendChild(fName); tr.appendChild(lName);
    tr.appendChild(fNum); tr.appendChild(grade)
    return tr
}



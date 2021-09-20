function generateReport() {
    let inputElements = Array.from(document.getElementsByTagName('input'));

    const resultArr = [];
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    const checkedCols = [];

    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const obj = {};

        for (let y = 0; y < row.children.length; y++) {
            const element = row.children[y];
            if (i == 0) {
                if (element.children[0].checked) {
                    checkedCols.push(y);
                }
                continue;
            }

            if (checkedCols.includes(y)) {
                let propertyName = inputElements[y].name;
                obj[propertyName] = element.textContent;
            }
        }
        if (i !== 0) {
            resultArr.push(obj);
        }
    }
    
    document.getElementById('output').value = JSON.stringify(resultArr);
}


// function generateReport() {
//     // find the indeces of checked boxes and save them in an array
//     let checkBoxIndeces = Array.from(document.getElementsByTagName('input')).map(function(el, index){
//         if (el.checked == true){
//             return index
//         }
//     }).filter(el => el !== undefined)

//     // find the names of these chacked boxes and save them in an array
//     let thTags = Array.from(document.getElementsByTagName('input')).map(el => el.name)
//     thTags = thTags.filter(el => checkBoxIndeces.includes(thTags.indexOf(el)))

//     // finde all the rows of a table without the heading row and save them in an array
//     let rows = Array.from(document.getElementsByTagName('tr')).map(el => el.innerText.split('\t')).slice(1)
//     console.log(rows);
    
//     // filter the rows so that only the checked once remain
//     let filteredRows = []
//     for (let i = 0; i < rows.length; i++){
//         let currentRow = rows[i]
//         let newRow = []
//         for (let x = 0; x < currentRow.length; x++){
//             if (checkBoxIndeces.includes(x)){
//                 newRow.push(currentRow[x])
//             }else{
//                 continue;
//             }
            
//         }
//         filteredRows.push(newRow)
        
//     }
    
//     // console.log(rows)
//     // console.log(filteredRows)
    
//     //  creat an Array of objects
//     let objectsArray = []
//     let curObj = {}
//     for (let row = 0; row < filteredRows.length; row++){
//         let curRow = filteredRows[row]
//         for (let col = 0; col < curRow.length; col++){
            
//             curObj[thTags[col]] = curRow[col] 

//         }
//         objectsArray.push(curObj) 
//         curObj = {}
        
//     }
//     // console.log(objectsArray)
//     // console.log(JSON.stringify(objectsArray))

    
//     if (Object.keys(objectsArray[0]).length > 0){
//        document.getElementById('output').value = JSON.stringify(objectsArray)
        
//     }else{
//         document.getElementById('output').innerHTML = null
//     }
        
    
// }


// // let obj = {a: 'a'}
// // console.log(Object.keys(obj).length)
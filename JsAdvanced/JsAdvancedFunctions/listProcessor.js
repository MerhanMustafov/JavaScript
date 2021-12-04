function modify(data){
    let arrayOfStr = []
    for (let i = 0; i < data.length; i++){
        let [command, string] = data[i].split(' ')
        if (command == 'add'){
            arrayOfStr.push(string)
        }else if (command == 'remove'){
            arrayOfStr = arrayOfStr.filter(el => el !== string)
        }else if (command == 'print'){
            console.log(arrayOfStr.join(','))
        }
    }

}


// function modify(data) {
//     let arrayOfStr = []
//     return m
//     function m(){
//         for (let i = 0; i < data.length; i++){
//             let [command, string] = data[i].split(' ')
//             if (command == 'add'){
//                 arrayOfStr.push(string)
//             }else if (command == 'remove'){
//                 arrayOfStr = arrayOfStr.filter(el => el !== string)
//             }else if (command == 'print'){
//                 console.log(arrayOfStr.join(','))
//             }
//         }   
        
//     }      
// }
    



// const input  = ['add hello', 'add again', 'remove hello', 'add again', 'print']
// const input1  = ['add pesho', 'add george', 'add peter', 'remove peter','print']
// let modifyer = modify(input)
// let modifyer = modify(input1)

// modifyer()
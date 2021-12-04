function solve() {
    let selectMenuTo = document.querySelector('#selectMenuTo')
    let button = document.getElementsByTagName('button')[0]
    let output = document.getElementById('result')

    // Create elements and add them to the selectMenuTo
    let optionHexadecimal = cElement('option', 'Hexadecimal', 'hexadecimal', 'selected')
    let optionBinary = cElement('option', 'Binary', 'binary', 'selected')
    selectMenuTo.appendChild(optionHexadecimal)
    selectMenuTo.appendChild(optionBinary)
    
    //click even listener on button Convert it
    button.addEventListener('click', () => {
        let input = Number(document.querySelector('#input').value)
        if (selectMenuTo.value == 'hexadecimal'){
            let hexadecimal = input.toString(16).toUpperCase()
            output.value = String(hexadecimal)
        }else if (selectMenuTo.value == 'binary'){
            let binary = input.toString(2)
            output.value = String(binary)
        }else if (selectMenuTo.selectedOptions[0].innerHTML == ''){
            output.value = String('')
        }
    })
    
    // Function for creating elements
    function cElement(elName, text, value, atr){
        let option = document.createElement(elName)
        option.innerHTML = text
        if (value){
            option.value = value
        }
        if (atr){
            option.setAttribute(atr, true)
        }
        return option
    }

}
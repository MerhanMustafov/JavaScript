function subtract(){
    let firstNum = Number(document.getElementById('firstNumber').value)
    let secondNum = Number(document.getElementById('secondNumber').value)
    result = firstNum - secondNum
    document.getElementById('result').innerHTML = result

}
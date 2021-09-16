function subtract() {
    let numOne = Number(document.getElementById('firstNumber')['value'])
    let numTwo = Number(document.getElementById('secondNumber')['value'])
    // console.log('hello');
    const result = numOne - numTwo
    // document.getElementById('result').textContent = result
    document.getElementById('result').innerHTML = result
}
function solve() {
  let input = document.getElementById('text').value.toLowerCase().split(' ');
  let currentCase = document.getElementById('naming-convention').value;

  let result;
  if (currentCase == "Camel Case"){
    // for (let i = 0; i < input.length; i++){
    //   if (i !== 0){
    //     input[i] = input[i].charAt(0).toLocaleUpperCase() + input[i].slice(1)
    //   }
    //   result = input.join('')
    // }
    
    // WITH MAP
    result = input.map((el, index) => index !== 0 ? el.charAt(0).toUpperCase() + el.slice(1) : el).join('')
    
  }else if (currentCase == "Pascal Case"){
    // for (let i = 0; i < input.length; i++){
    //   input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1)
    // }
    // result = input.join('')

    // WITH MAP
    result = input.map((el, index) => el.charAt(0).toUpperCase() + el.slice(1)).join('')

  }else{
    result = "Error!"
  }
  document.getElementById('result').innerHTML = result
}


// let arrayOfString = ['aaa', 'bbb', 'ccc']


// arrayOfString = arrayOfString.map((el, index) => index !== 0 ? el.charAt(0).toUpperCase() + el.slice(1) : el)
// // arrayOfString.map(el => console.log(el.charAt(0).toUpperCase() + el.slice(1)))

// console.log(arrayOfString)
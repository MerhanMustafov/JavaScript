function camelCase(input){
  let result = ''
  for (let i = 0; i < input.length; i++){
    if (input[i] == ' '){
      continue;
    }else if (input[i-1]==' '){
      let upper = input[i].toUpperCase()
      result += upper
      continue;
    }
    result += input[i]
  }
  return result
}
function pascalCase(input){
  let result = ''
  for (let i = 0; i < input.length; i++){
    if (i == 0){
      let upper = input[i].toUpperCase()
      result += upper
      continue;
    }else if (input[i-1]==' '){
      let upper = input[i].toUpperCase()
      result += upper
      continue;
    }else if (input[i] == ' '){
      continue;
    }
    result += input[i]
  }
  return result
}
function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  
  // currentCase = currentCase.replace(/^"|"$/g, "");
  
  input = input.toLowerCase()
  let result;
  if (currentCase == "Camel Case"){
    result = camelCase(input)
  }else if (currentCase == "Pascal Case"){
    result = pascalCase(input)
  }else{
    result = 'Error!'
  }
  document.getElementById('result').textContent = result

}
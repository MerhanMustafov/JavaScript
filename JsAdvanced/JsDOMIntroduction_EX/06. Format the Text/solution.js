function solve() {
  let roughText = document.querySelector('#input').value;

  let arrayOfSentences = roughText.split('.')
  let divTagOutput = document.querySelector('#output')
  let paragraphs = []
  
  for (let i = 0; i < arrayOfSentences.length; i++){
    let currentSentence = arrayOfSentences[i]
    if (currentSentence.length > 0){
      paragraphs.push(arrayOfSentences[i])
    }
    
    if (paragraphs.length == 3){
      paragraphs[paragraphs.length - 1] += '.'
      let result = paragraphs.join('. ')
      
      divTagOutput.innerHTML += `<p>${result}</p>`
      paragraphs.length = []
    }  
      
  }
  if (paragraphs[0]){
    paragraphs[paragraphs.length - 1] += '.'
    let result = paragraphs.join('. ')
    divTagOutput.innerHTML += `<p>${result}</p>`
  }
}



// let str = `JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a
// language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside
// HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web. JavaScript enables
// interactive web pages and thus is an essential part of web applications. The vast majority of websites use it,
// and all major web browsers have a dedicated JavaScript engine to execute it. As a multi-paradigm language,
// JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based)
// programming styles. It has an API for working with text, arrays, dates, regular expressions, and basic
// manipulation of the DOM, but the language itself does not include any I/O, such as networking, storage, or
// graphics facilities, relying for these upon the host environment in which it is embedded.`


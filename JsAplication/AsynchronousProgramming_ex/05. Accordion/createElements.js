export { createSection, createExtra };

function createSection(data) {
  let section = e(
    "div",
    { className: "accordion" },
    e("div", { className: "head" }, e("span", {}, data.title),
    e('button', {className: 'button', id: data._id}, 'More'))
  );
  return section
}

function createExtra(content){
    let extra = e('div', {className: 'extra'}, e('p', {}, content))
    return extra
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function e(tag, atr, ...content) {
    let result = document.createElement(tag);
  
    if (Object.keys(atr).length > 0) {
      Object.keys(atr).forEach((a) => {
        result[a] = atr[a];
      });
    }
    content.forEach((el) => {
      if (typeof el == "object") {
        result.appendChild(el);
      } else {
        result.textContent = el;
      }
    });
    return result;
  }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
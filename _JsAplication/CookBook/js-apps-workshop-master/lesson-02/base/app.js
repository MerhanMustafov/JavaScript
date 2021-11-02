window.onload = async () => {
    console.log("It works");
    LoadRecipesOnLoad(); 

    document.querySelector("main").addEventListener("click", onClick);
};

async function onClick(e) {
  if (e.target.tagName == "ARTICLE") {
    const res = await fetch(
      `http://localhost:3030/jsonstore/cookbook/details/` + e.target.id
    );
    let data = await res.json();
    showDetails(e.target, data);
  }
}

async function showDetails(targetEl, data) {
    let x = data.steps.map(s => s)
    console.log(x.join(''))
    let result = `
        <h2>${data.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src=${data.img}>
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${data.ingredients.map(ingr => {
                        let li = `<li>${ingr}</li>`
                        return li
                    }).join("\n")}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${data.steps
            .map(s => {
                let p = `<p>${s}</p>`
                return p
            }).join("")}
        </div>
    `;
    targetEl.innerHTML = 'Loading...';
    targetEl.innerHTML = result;

}

async function LoadRecipesOnLoad() {
  const response = await fetch(
    `http://localhost:3030/jsonstore/cookbook/recipes`
  );
  const recipiesData = await response.json();
//   console.log(document.querySelector("p"))
  document.querySelector("main>p").remove()
  Object.keys(recipiesData).forEach((i) => {
    let res = `<article class="preview" id="${recipiesData[i]._id}">
    <div class="title">
        <h2>${recipiesData[i].name}</h2>
    </div>
    <div class="small">
        <img src="${recipiesData[i].img}">
    </div>
</article>`;
    
    
    document.querySelector("main").innerHTML += res;

  });
  
}

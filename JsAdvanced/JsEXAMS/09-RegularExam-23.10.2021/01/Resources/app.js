window.addEventListener('load', solve);

function solve() {
  let delegation = document.querySelector('#wrapper')
  delegation.addEventListener('click', onClick)


  function onClick(e) {
    e.preventDefault()
    //inputs
    let [genre, song, autor, date] = Array.from(document.querySelector('form').children).filter(c => c.tagName == 'INPUT')

    if (e.target.tagName == "BUTTON" && e.target.id == "add-btn") {
      if (genre.value && song.value && autor.value && date.value) {

        let savedSection = document.querySelector(".all-hits-container");

        //create
        let div = document.createElement('div')
        div.setAttribute('class', 'hits-info')


        let img = document.createElement('img')
        img.setAttribute('src', "./static/img/img.png")
        let h2Genre = document.createElement('h2')
        h2Genre.textContent = `Gener: ${genre.value}`

        let h2Name = document.createElement('h2')
        h2Name.textContent = `Name: ${song.value}`
        let h2AutHor = document.createElement('h2')
        h2AutHor.textContent = `Author: ${autor.value}`
        let h3Date = document.createElement('h3')
        h3Date.textContent = `Date: ${date.value}`

        let saveBtn = document.createElement('button')
        saveBtn.setAttribute('class', 'save-btn')
        saveBtn.textContent = 'Save song'

        let likeBtn = document.createElement('button')
        likeBtn.setAttribute('class', 'like-btn')
        likeBtn.textContent = 'Like song'

        let deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class', 'delete-btn')
        deleteBtn.textContent = 'Delete'


        div.appendChild(img)
        div.appendChild(h2Genre)
        div.appendChild(h2Name)
        div.appendChild(h2AutHor)
        div.appendChild(h3Date)

        div.appendChild(saveBtn)
        div.appendChild(likeBtn)
        div.appendChild(deleteBtn)

        savedSection.appendChild(div)

        
        genre.value = ''
        song.value = ''
        autor.value = ''
        date.value = ''


      }


    } else if (e.target.tagName == "BUTTON" && e.target.className == 'like-btn') {
      let sectionTotalLikes = document.querySelector('#total-likes')
      let likes = sectionTotalLikes.children[0].children[0].textContent.split(': ')
      likes[1] = Number(likes[1]) + 1
      sectionTotalLikes.children[0].children[0].textContent = likes.join(': ')
      e.target.disabled = true
    } else if (e.target.tagName == "BUTTON" && e.target.className == 'save-btn') {
      let saveSongs = document.querySelector('.saved-container')

      saveSongs.appendChild(e.target.parentElement)
      e.target.nextElementSibling.remove()
      e.target.remove()
    } else if (e.target.tagName == "BUTTON" && e.target.className == 'delete-btn') {
      e.target.parentElement.remove()
    }

  }
}



//colleaugues 100/100
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
window.addEventListener('load', solve);

function solve() {
    // get input
    let genreField = document.getElementById('genre');
    let nameField = document.getElementById('name');
    let autorField = document.getElementById('author');
    let dateField = document.getElementById('date');
    let buttonField = document.getElementById("add-btn");
    buttonField.addEventListener('click', isValid);
    let collection = document.querySelector('.all-hits-container');
    let saved = document.querySelector('.saved-container');

function deleteSong(e){
    let song = e.target.parentElement
    song.remove();
}

    function moveToSave(e) {
        let divToMove = e.target.parentElement
        let saveButton = e.target
        let likeButton = e.target.nextElementSibling
        saveButton.remove();
        likeButton.remove();
        saved.appendChild(divToMove)
    }

    function gainLikes(e) {
        let likesField = document.querySelector('.likes p')
        let likes = likesField.textContent
        let [label, num] = likes.split(': ')
        num = Number(num)
        num++
        let result = `${label}: ${num}`
        likesField.textContent = result
        console.log(e.target);
        e.target.setAttribute("disabled", 'true')
    }

    function getInfo(genre, name, autor, date) {
        let divEl = createEl('div', ['class', 'hits-info'], '');
        let imgEl = createEl('img', '', '');
        imgEl.setAttribute('src', "./static/img/img.png")
        let genreEl = createEl('h2', '', `Genre: ${genre}`);
        let nameEl = createEl('h2', '', `Name: ${name}`);
        let autorEl = createEl('h2', '', `Author: ${autor}`);
        let dateEl = createEl('h3', '', `Date: ${date}`);
        let buttonSave = createEl('button', ['class', 'save-btn'], 'Save song');
        buttonSave.addEventListener('click', moveToSave)
        let buttonLike = createEl('button', ['class', 'like-btn'], 'Like song');
        buttonLike.addEventListener('click', gainLikes)
        let buttonDelete = createEl('button', ['class', 'delete-btn'], 'Delete');
        buttonDelete.addEventListener('click', deleteSong)
        divEl.appendChild(imgEl)
        divEl.appendChild(genreEl)
        divEl.appendChild(nameEl)
        divEl.appendChild(autorEl)
        divEl.appendChild(dateEl)
        divEl.appendChild(buttonSave)
        divEl.appendChild(buttonLike)
        divEl.appendChild(buttonDelete)

        collection.appendChild(divEl)
        console.log(this);
    }

    //isValidFunction
    function isValid(e) {
        e.preventDefault()
        let patern = /^(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).\d{4}$/
        let result = true
        if (genreField.value.trim() === '' || nameField.value.trim() === '' || autorField.value.trim() === '') {
            result = false
        }
        let testDate = dateField.value.match(patern)
        console.log(testDate);
        if (result === true && testDate !== null) {
            getInfo(genreField.value.trim(), nameField.value.trim(), autorField.value.trim(), testDate[0])
        }
        genreField.value = "";
        nameField.value = "";
        autorField.value = "";
        dateField.value = "";

    }
    // create Element func
    function createEl(type, atrr, content) {
        let result = document.createElement(type)
        if (atrr !== "") {
            for (let i = 0; i < atrr.length; i += 2) {
                result.setAttribute(atrr[i], atrr[i + 1])
            }
        }
        if (content !== '') {
            result.textContent = content
        }
        return result
    }
}
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function solve() {

  let inputs = {
    genre: document.getElementById('genre'),
    name: document.getElementById('name'),
    author: document.getElementById('author'),
    date: document.getElementById('date')
  }

  const songsContainer = document.querySelector('.all-hits-container');

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    for (let input in inputs) {
      if (inputs[input].value == '') {
        return;
      }
    }


    let song = el('div', 'hits-info', {},
      el('img', '', {}, ''),
      el('h2', '', {}, `Genre: ${inputs.genre.value}`),
      el('h2', '', {}, `Name: ${inputs.name.value}`),
      el('h2', '', {}, `Author: ${inputs.author.value}`),
      el('h3', '', {}, `Date: ${inputs.date.value}`),
      el('button', 'save-btn', {}, 'Save song'),
      el('button', 'like-btn', {}, 'Like song'),
      el('button', 'delete-btn', {}, 'Delete')
    )

    let img = song.querySelector('img');
    img.src = './static/img/img.png'

    // configure likeBtn
    // take the current value of likes inside the p with id #total-likes and increase by one
    // DISABLE THE LIKE BUTTON ONCE CLIKED ex btn.disable = true; (Once the button is disabled, its color will turn gray)

    function likeSong(e) {
      e.preventDefault()
      e.target.disabled = true;

      let totalLikes = document.querySelector('.likes p');
      let previousLikesText = totalLikes.textContent;
      let previousLikes = Number(previousLikesText.substring(previousLikesText.length - 1));
      let newLikes = previousLikes + 1;
      totalLikes.textContent = `Total Likes: ${newLikes}`;
    }

    song.querySelector('.like-btn').addEventListener('click', likeSong)

    // •	When the ["Save song"] button is clicked, you need to move the current song in the div with class "saved-container".
    song.querySelector('.save-btn').addEventListener('click', (e) => {
      e.preventDefault()
      const currentSong = e.target.parentNode;
      currentSong.querySelector('.like-btn').remove()
      currentSong.querySelector('.save-btn').remove()
      let savedSongs = document.querySelector('.saved-container');
      savedSongs.appendChild(currentSong)
    })

    // •	When you click the ["Delete"] button, the song should be removed from the current section.
    // Note: When deleting a song, you should not reduce the value of the current number of likes.
    song.querySelector('.delete-btn').addEventListener('click', (e) => {
      e.preventDefault()
      e.target.parentNode.remove()
    })

    songsContainer.appendChild(song)

    for (let input in inputs) {
      inputs[input].value = '';
    }
  })


  // Create element function
  function el(type, className, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
      element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item === 'string' || typeof item === 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item)
    }

    if (className !== '') {
      element.classList.add(className)
    }

    return element
  }

}

*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

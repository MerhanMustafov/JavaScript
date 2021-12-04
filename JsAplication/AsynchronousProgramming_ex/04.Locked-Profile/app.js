import { createUser} from "./createUser.js";
window.lockedProfile = lockedProfile
async function lockedProfile() {
  const url = `http://localhost:3030/jsonstore/advanced/profiles`;

  let users = await getAllUsersInfo(url);
  displayUser(users);
  document.querySelector("#container").addEventListener("click", onClick);
}

function onClick(e) {
    let profile = e.target.parentElement;
    let lock = profile.querySelector('input[value="lock"]');
    let unlock = profile.querySelector('input[value="unlock"]');
    let button = e.target;
    let hiddenField = profile.querySelector("#user1HiddenFields");
  if (e.target.tagName == "BUTTON") {
    

    if (lock.checked) {
      return;
    }
    if (unlock.checked) {
      if (button.textContent == "Show more") {
        hiddenField.style.display = "block";
        button.textContent = "Show less";
      } else if (button.textContent == "Show less") {
        hiddenField.style.display = "";
        button.textContent = "Show more";
      }
    }
  } 
}

function displayUser(users) {
  let main = document.getElementById("main");
  main.replaceChildren();
  let count = 1
  Object.keys(users).forEach(k => {
      let user = createUser(users, k, count)
      main.appendChild(user);
      count += 1
  })
}

async function getAllUsersInfo(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}



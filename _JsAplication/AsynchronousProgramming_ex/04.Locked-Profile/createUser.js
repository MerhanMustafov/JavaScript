export {createUser}


function e(tag, atr, ...content) {
  let result = document.createElement(tag);

  if (Object.keys(atr).length > 0) {
    Object.keys(atr).forEach((k) => {
      result[k] = atr[k];
    });
  }
  content.forEach((c) => {
    if (typeof c == "object") {
      result.appendChild(c);
    } else {
      result.textContent = c;
    }
  });
  return result;
}



function createUser(users, k, count){
    let user = e(
        "div",
        { className: "profile" },
        e("img", { src: "./iconProfile2.png", className: "usericon" }),
        e("label", {}, "Lock"),
        e("input", {
          type: "radio",
          name: `user${count}Locked`,
          value: "lock",
          checked: false,
        }),
        e("lable", {}, "Unlock"),
        e("input", {
          type: "radio",
          name: `user${count}Locked`,
          value: "unlock",
          checked: false,
        }),
        e("br", {}, ""),
        e("hr", {}, ""),
        e("label", {}, "Username"),
        e("input", {
          type: "text",
          name: "user1Usename",
          value: `${users[k].username}`,
          disabled: true,
          readonly: true,
        }),
        e(
          "div",
          { id: "user1HiddenFields" },
          e("hr", {}, ""),
          e("label", {}, `Email:`),
          e(
            "input",
            {
              type: "emain",
              name: "user1Usename",
              value: `${users[k].email}`,
              disabled: true,
              readonly: true,
            },
            ""
          ),
          e("label", {}, `Age:`),
          e(
            "input",
            {
              type: "email",
              name: "user1Age",
              value: ` ${users[k].age}`,
              disabled: true,
              readonly: true,
            },
            ""
          )
        ),
        e("button", {}, "Show more")
      );
    
    return user
      
}

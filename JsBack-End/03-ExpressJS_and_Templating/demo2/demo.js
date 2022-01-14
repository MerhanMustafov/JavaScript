const express = require("express");
const handlebars = require("express-handlebars");

const port = 5000;
const app = express();

app.engine(
  ".hbs", //1
  handlebars.engine({
    //2
    extname: ".hbs", //3
  })
);

//app.set("views", "templates"); //4
app.set("view engine", ".hbs"); //5

app.get("/", (req, res) => {
  const person = {
    user: {
      present: true,
    },
    pageName: "SITE",
    name: "Peter Doe",
    age: "25",
    items: {
      model: "Toshiba",
    },
    array: [1, 2, 3, 4, 5, 6, 7],

    arrayOfObjects: [
      {
        type: "Roudster",
        price: 100000,
      },
      {
        type: "Roudster1212",
        price: 1004545,
      },
      {
        type: "Roudster4564524",
        price: 10045645,
      },
    ],

    emptyArray: [1, 2],
  };
  res.render("home", person); //6, //8
});

app.listen(port, () => console.log("Server listening --> port " + port));

//1 >>> //this is the extention name of the files so that express can recognize it
//2 >>> //defaultLayout: "site",// with this you can changed the default file name from main.hbs to site.hbs(site)
//3 >>> //this is for the handlebars so that it can recognize it
//4 >>> //the views forlder comes from express and could be chaneged using >>>> app.set('views', 'templates')
//5 >>> //and this tells to express what extention to search for if it is not mentiond in the file

// 6 >>>
/*
  if there is no .hbs at the end of the file here >>>>>>  res.render("home") 
  it will check >>>>>> app.set("view engine", ".hbs") 
  if it is present it will work 
  else it will throw >>>>>> Error: No default engine was specified and no extension was provided.
  res.render("home"); <<<>>> res.render("home.hbs");
  */

//7 >>>
/* 
Handlebars - should have views folder then layouts folder in view and main.hbs file in layouts
and within the main.hbs we should have {{{body}}} with thee curly brackets
*/

//8 >>> //as a second parameter we pass the data

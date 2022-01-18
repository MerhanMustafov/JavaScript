const express = require("express");
const bodyParser = express.urlencoded;
const expressSession = require("express-session");
const routes = require("./config/routes");

let users = {};
start();
async function start() {
  const app = express();
  app.use(
    expressSession({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );
  app.use(bodyParser({ extended: true }));

  routes(app);

  app.post("/login", (req, res) => {
    const user = users[req.body.name];
    if (user && user.password == req.body.password) {
      console.log(req.session);
      req.session.user = user;
      res.redirect("/");
    } else {
      res.send("WRONG");
    }
  });

  app.post("/register", (req, res) => {
    const user = req.body.name;
    users[user] = {
      name: req.body.name,
      password: req.body.password,
    };
    req.session.user;
    console.log(req.session);
    console.log(users);
    res.redirect("/");
  });
  app.listen(3000, () =>
    console.log("Server is ON listening on port: " + 3000)
  );
}

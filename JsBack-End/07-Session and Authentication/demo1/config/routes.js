module.exports = (app) => {
  console.log("Routes is working");
  app.get("/", (req, res) => {
    res.send(
      `
              <h1>Home Page<h1>
              <a href="/login">LogIn</a>
              <a href="/register">Register</a>
              `
    );
  }),
    app.get("/login", (req, res) => {
      res.send(
        `
            <h1>Login Page<h1>
            <form action="/login" method="POST">
            <lable>Name: <input type="text" name="name"></lable><br>
            <lable>Password: <input type="text" name="password"></lable>
            <input type="Submit">
            </form>
            `
      );
    }),
    app.get("/register", (req, res) => {
      res.send(
        `
              <h1>Register Page<h1>
              <form action="/register" method="POST">
              <lable>Name: <input type="text" name="name"></lable><br>
              <lable>Password: <input type="text" name="password"></lable>
              <input type="Submit">
              </form>
              `
      );
    });
};

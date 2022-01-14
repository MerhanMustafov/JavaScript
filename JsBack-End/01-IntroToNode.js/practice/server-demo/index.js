//import core module.
const http = require("http");

//import router.
const router = require("./router.js");

//import controllers, where all the loggic for current requested page from client is.
const home = require("./controllers/home.js");
const about = require("./controllers/about.js");
const catalog = require("./controllers/catalog.js");
const create = require("./controllers/create.js");
const deleteItem = require("./controllers/delete");

//creating the server by passing the main controller/handler ---> requestHandler
const server = http.createServer(requestHandler);
const port = 5000;

//register routes to the routing "table"
router.get("/", home);
router.get("/home", home);
router.get("/about", about);
router.get("/catalog", catalog);
router.post("/create", create);
router.get("/delete", deleteItem);

//main handler/controller - the request enters here first
function requestHandler(req, res) {
  const url = new URL(req.url, "http://localhost");
  const handler = router.match(req.method, url.pathname);

  //executing the returned route from router.js
  //and goes to the related contoller and executes the content there
  handler(req, res);
}

server.listen(port, () => console.log("Server is listening on port " + port));

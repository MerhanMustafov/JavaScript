const http = require("http"); //import core module
const about = require("./controllers/about.js");
const catalog = require("./controllers/catalog.js");
const create = require("./controllers/create.js");
const home = require("./controllers/home.js");
const router = require("./router.js");
const deleteItem = require("./controllers/delete");

const server = http.createServer(requestHandler);
const port = 5000;

//register routs
router.get("/home", home);
router.get("/about", about);
router.get("/catalog", catalog);
router.post("/create", create);
router.get("/delete", deleteItem);

//main handler - the request enters here first
function requestHandler(req, res) {
  const url = new URL(req.url, "http://localhost");
  const handler = router.match(req.method, url.pathname);
  handler(req, res);
}

server.listen(port, () => console.log("Server is listening on port " + port));

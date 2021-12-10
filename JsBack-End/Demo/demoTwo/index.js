const http = require('http')
const router = require('./router')

const homePageControler = require('./controllers/homeControler')
const aboutController = require('./controllers/aboutController')
const catalogController = require('./controllers/catalogController')

// router.registerHendler('/', (req, res) => {
//     res.write('HOME PAGE')
//     res.end()
// })
router.registerHendler('/', homePageControler)
router.registerHendler('/about', aboutController)
router.registerHendler('/catalog', catalogController)

const server = http.createServer(requestHandler);
const port = 3000

function requestHandler(req, res){
    const hendler = router.match(req.url)
    hendler(req, res)
}

server.listen(port, ()=> console.log('Server is listening ' + port))
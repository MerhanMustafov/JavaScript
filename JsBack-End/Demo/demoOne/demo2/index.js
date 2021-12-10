const http = require('http');
const router = require('./router')

router.registerHendler('/', (req, res) => {
    res.write('HOME PAGE FOUND')
    res.end()
})

const server = http.createServer(requestHandler)
const port = 3000

function requestHandler(req, res){
    console.log('>>>',  req.url, req.method)
    const hendler = router.match(req.url)
    hendler(req, res)
}


server.listen(port, () => console.log('Server is listening to ' + port))
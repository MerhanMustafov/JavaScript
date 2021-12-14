const express = require('express');
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send(202, 'HOME PAGE')
})

// app.get('/download', (req, res) => {
//     res.download('./img/img.png')
// })
app.get('/download', (req, res) => {
    res.sendFile(__dirname + '/img/img.png')
})
app.listen(port, () => console.log('Server is listening on port ' + port))
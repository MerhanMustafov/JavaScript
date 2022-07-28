const express = require('express')
const mongoose = require('mongoose')
const setCors = require('./middlewares/cors')
const userController = require('./controllers/userController')
const dataController = require('./controllers/dataController')

const PORT = 3030
start()
async function start() {

    try {
        mongoose.connect('mongodb://localhost:27017/TestData', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB successfully connected')
    } catch (err) {
        console.log(err.message)
    }
    const app = express()
    app.use(setCors())
    app.use(express.json())
    app.use('/', dataController)
    app.use('/users', userController)
    app.use('/data', dataController)
    

    app.listen(PORT, () => console.log(`Server is on http://localhost:${PORT}`))


}
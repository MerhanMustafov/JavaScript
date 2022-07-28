const route = require('express').Router()
module.exports = route

const furnitureService = require('../services/itemService')

route.get('/catalog', async (req, res) => {
    // console.log('INSIDE GET catalog')
    try {
        
        const furnituresList = await furnitureService.getAll()
        res.status(200).json(furnituresList)
    } catch (err) {
        res.status(404).json(err)
    }

})
route.post('/catalog', async (req, res) => {
  const furniture = {
    make: req.body.make,
    price: req.body.price,
    model: req.body.model,
    image: req.body.img,
    year: req.body.year,
    material: req.body.material,
    description: req.body.description,
  }
    // console.log(furniture)
    try {
        
        const createdfurniture = await furnitureService.create(furniture)
        res.status(200).json(createdfurniture)
    } catch (err) {
        res.status(404).json(err)
    }
    
//   res.status(200).json({ message: 'POST Successful' })
})

const { Schema, model } = require('mongoose')


const furnitureModel = new Schema({
    make: {type: String, reqired: [true, 'make field is required!'], minLength: [4, 'Make at least 4 char long!']},
    price: {type: Number, reqired: [true, 'price field is required!'], min: [0, 'Price should be positivee number!']},
    model: {type: String, reqired: [true, 'model field is required!'], minLength: [4, 'Make at least 4 char long!']},
    image: {type: String, reqired: [true, 'image field is required!']},
    year: {type: String, reqired: [true, 'year field is required!'],  min: [1950, 'the year should be betweedn 1950 and 2050'], max: [2050, 'the year should be betweedn 1950 and 2050']},
    material: {type: String},
    descriiption: {type: String, reqired: [true, 'descriiption field is required!'],  min: [11, 'Descriiption should be more than 10 symbols!']},
}) 

module.exports = model('Item', furnitureModel)
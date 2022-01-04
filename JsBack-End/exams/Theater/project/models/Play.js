const {Schema, model} = require('mongoose');

//това е схемата/макета на user-а 
const schema = new Schema({})

module.exports = model('Play', schema)
const {Schema, model} = require('mongoose');

//това е схемата/макета на user-а 
const schema = new Schema({
    username: {type: String, required: true},
    hashedPassword: {type: String, required: true}
})

module.exports = model('User', schema)
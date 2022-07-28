const { Schema, model} = require('mongoose')


const userSchema = new Schema({
    email: { type: String, required: [true, 'userName is required' ]},
    hashedPassword: {type: String, required: [true, 'password is required']}
})

module.exports = model('User', userSchema)
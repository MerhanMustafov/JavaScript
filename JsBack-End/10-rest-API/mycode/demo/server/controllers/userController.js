const route = require('express').Router()

const userService = require('../services/userService')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const tokenSecret = 'This is very secure!'



route.post('/register', async (req, res) => {
  try {
    const existing = await userService.getUserByEmail(req.body.email)
    if (existing) {
      throw new Error('User already exists!')
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const userData = {
      email: req.body.email,
      hashedPassword: hashedPassword,
    }

    const registeredUser = await userService.create(userData)
    const token = generateToken(registeredUser)
    res.status(200).json(token)
  } catch (err) {
    res.status(409).json({message: [err].map(e => e.message)})
  }
})

route.post('/login', async (req, res) => {
    try {
        const existing = await userService.getUserByEmail(req.body.email)
        if (!existing) {
            throw new Error('Such user does not exists!')
        }
        const match = await bcrypt.compare(req.body.password, existing.hashedPassword)
        if (!match) {
            throw new Error('Incorrect password!')
        }
        const token = generateToken(existing)
        res.status(200).json(token)
    } catch (err) {
        res.status(404).json({message: [err].map(e => e.message)})
    }
})

route.get('/logout', async (req, res) => {
    try {
        const token = req.headers['x-authorization']
        const userD = jwt.verify(token, tokenSecret)
        res.status(200).json()
    } catch (err) {
        res.status(404).json({message: [err].map(e => e.message)})
    }
})
function generateToken(userData) {
  return {
    _id: userData._id,
    email: userData.email,
    accessToken: jwt.sign(
      { hashedPassword: userData.hashedPassword },
      tokenSecret,
    ),
  }
}



module.exports = route
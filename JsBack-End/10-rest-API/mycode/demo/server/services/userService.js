const UserModel = require('../models/UserModel')
module.exports = {
  create,
  getAllUsers,
  getUserByEmail,
}

// create user in DB
async function create(userData) {
  try {
    const existing = await UserModel.findOne({
      email: new RegExp(`^${userData.email.trim()}$`),
    })
    if (existing) {
      throw new Error('UserName already exists!')
    }
    const user = new UserModel(userData)
    return await user.save()
  } catch (err) {
    throw new Error(err)
  }
}

async function getUserByEmail(email) {
  const pattern = new RegExp(`^${email}$`)
  const user = await UserModel.findOne({ email: pattern })
  return user
}


async function getAllUsers() {
  const users = await UserModel.find({})
  return users
}

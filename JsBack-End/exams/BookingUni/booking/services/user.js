const User = require('../models/User');


async function createUser(username, email, hashedPassword){
    const user = new User({
        username,
        hashedPassword,
        email,
    })

    await user.save()

    return user;
}

async function getUserByUserName(username){
    const pattern = new RegExp(`^${username}$`, 'i')
    const user = await User.findOne({username: {$regex: pattern }});
    return user
}
async function getUserByUEmail(email){
    const pattern = new RegExp(`^${email}$`, 'i')
    const user = await User.findOne({email: {$regex: pattern }});
    return user
}

module.exports = {
    createUser,
    getUserByUserName,
    getUserByUEmail
}
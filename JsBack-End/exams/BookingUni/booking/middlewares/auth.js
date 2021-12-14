//login/register/logout functionalities

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {COOKIE_NAME, TOKEN_SECRET} = require('../config/index')
const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    if(parseToken(req, res)){
        req.auth = {
            async register(username, email,password){
                const token = await register(username, email, password);
                res.cookie(COOKIE_NAME, token)
            },
            async login(username, password){
                const token = await login(username, password);
                res.cookie(COOKIE_NAME, token)
            },
            logout(){
                res.clearCookie(COOKIE_NAME)
            },
        }

        next()

    }

}



async function register (username, email, password){
    const existUser = await userService.getUserByUserName(username);
    const existEmail = await userService.getUserByUEmail(email);

    if(existUser){
        throw new Error('Username is taken!')
    }else if(existEmail){
        throw new Error('Email is taken!')

    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, email, hashedPassword)
    return generateToken(user)
}


async function login(username, password){
    const user = await userService.getUserByUserName(username);

    if(!user){
        throw new Error('No such user')
    }

    // const hasMatched = await bcrypt.compare(password, user.hashedPassword);

    if(!password == user.hashedPassword){
        throw new Error('Incorrect password');
    }

    return generateToken(user);
}

function generateToken(userData){
    return token = jwt.sign({
        _id: userData._id,
        username: userData.username,
        email: userData.email,
    }, TOKEN_SECRET);
    

}

function parseToken(req, res){
    const token = req.cookies[COOKIE_NAME]
    if(token){
        try{
        const userData = jwt.verify(token, TOKEN_SECRET)
        req.user = userData
        res.locals.user = userData
        return true
    
        }catch(err){
            res.clearCookie(COOKIE_NAME);
            res.redirect('/auth/login')
    
            return false
    
        }

    }
    return true;


}


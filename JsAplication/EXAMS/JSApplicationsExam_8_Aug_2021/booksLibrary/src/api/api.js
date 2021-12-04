import {getUserData, setUserData, clearUserData} from './utils.js';


const host = `http://localhost:3030`

async function request(url, options){
    try{
        const res = await fetch(host + url, options)

        if (res.ok !== true){
            if(res.status == 403){
                clearUserData()
            }
            const error = await res.json()
            throw new Error(error.message)

            
        }
        if (res.status == 204){//204 no Content should be
            return res
        }else{
            return res.json()
        }

    }catch (err) {
        // alert(err.message);
        throw err
    }
}


function createOptions(method = 'get', data){
    const options = { 
        method,
        headers: {}
    };
    if (data !== undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }
    const userData = getUserData()
    if(userData != null){
        options.headers['X-Authorization'] = userData.token
    }

    return options;

}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// REQUESTS >>> GET/POST/PUT/DELETE

export function get(url){
    return request(url, createOptions())
}

export async function post(url, data){
    return request(url, createOptions('post', data))
}

export async function put(url, data){
    return request(url, createOptions('put', data))
}

export async function del(url){
    return request(url, createOptions('delete'))
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LOGIN/REGISTER/LOGOUT

export async function login(email, password){
    const result = await post ('/users/login', {email, password})
    // console.log(result)

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData)

}


export async function registerPage(email, password){
    const result = await post ('/users/register', {email, password})

    console.log(result)
    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }
    setUserData(userData)

}

export async function logout() {
    await get('/users/logout')
    clearUserData()
}

// export async function logout() {
//     const response = await fetch('http://localhost:3030/users/logout', {
//         method: 'get',
//         headers: {
//             'X-Authorization': getUserData().token
//         },
//     });
//     if (response.status == 200) {
//         return response;
//     }
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
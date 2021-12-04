import * as api from './api.js';

export const login = api.login;
export const register = api.registerPage;
export const logout = api.logout;


const endpoints = {
    all: '/data/books?sortBy=_createdOn%20desc',
    byId: '/data/books/',
    myItems: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: '/data/books',
    edit: '/data/books/',
    delete: '/data/books/',

    likes: '/data/likes',
    forBook: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    forUser: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`


}

export async function getAll(){
    return api.get(endpoints.all)
}


export async function getById(id){
    return api.get(endpoints.byId + id)
}

export async function getMyItems(userId){
    return api.get(endpoints.myItems(userId))
}



export async function createItem(data){
    console.log(data)
    return api.post(endpoints.create, data)
}

export async function editItem(id, data){
    return api.put(endpoints.edit + id, data)
}

export async function deleteItem(id){
    return api.del(endpoints.delete + id)
}

export async function postLike(data){
    return api.post(endpoints.likes, data)
}

export async function likesForBook(bookId){
    return api.get(endpoints.forBook(bookId)) 
    
}

export async function likesForUser(bookId, userId){
    return api.get(endpoints.forUser(bookId, userId))
}

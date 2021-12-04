import * as api from './api.js';

// these are the universial things
export const login = api.login;
export const register = api.register;
export const logout = api.logout;


// these are the things pertained to that application
//  three functions for reading
const endpoints = {
    all: '/data/catalog',
    byId: '/data/catalog/',
    myItems: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
    create: '/data/catalog',
    edit: '/data/catalog/',
    delete: '/data/catalog/',


}

export async function getAll(){
    // console.log(endpoints.all)
    return api.get(endpoints.all)
}


export async function getById(id){
    // console.log(endpoints.byId + id)
    return api.get(endpoints.byId + id)
}

export async function getMyItems(userId){
    // console.log(endpoints.myItems(userId))
    return api.get(endpoints.myItems(userId))
}



export async function createItem(data){
    // console.log(endpoints.create + id, data)
    console.log(data)
    return api.post(endpoints.create, data)
}

export async function editItem(id, data){
    // console.log(endpoints.delete + id, data)
    return api.put(endpoints.edit + id, data)
}

export async function deleteItem(id){
    // console.log(endpoints.delete + id)
    return api.del(endpoints.delete + id)
}
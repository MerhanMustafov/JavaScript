import * as api from './api.js';

export const login = api.login;
export const register = api.registerPage;
export const logout = api.logout;


export async function getAlbums(){
    return api.get(`/data/albums?sortBy=_createdOn%20desc&distinct=name`)
}

export async function getAlbumById(id){
    return api.get(`/data/albums/` + id)
}

export async function createAlbum(data){
    return api.post(`/data/albums`, data)
}

export function deleteAlbum(id){
    return api.del(`/data/albums/` + id)

}

export async function editAlbum(id, data){
    return api.put(`/data/albums/` + id, data)
}


export async function getByName(name){
    return api.get(`/data/albums?where=name%20LIKE%20%22${name}%22`)
}





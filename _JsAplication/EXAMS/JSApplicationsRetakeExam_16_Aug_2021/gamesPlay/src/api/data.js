import * as api from './api.js';

export const login = api.login;
export const register = api.registerPage;
export const logout = api.logout;


const endpoints = {
    all: '/data/games?sortBy=_createdOn%20desc',
    mostReasent: `/data/games?sortBy=_createdOn%20desc&distinct=category`,
    gameById: '/data/games/',
    create: '/data/games',
    edit: '/data/games/',
    delete: '/data/games/',
    comments: '/data/comments',
    gameComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,


}

export async function getAllGames(){
    return api.get(endpoints.all)
}

export async function getMostReasent(){
    return api.get(endpoints.mostReasent)
}

export async function getGameById(id){
    return api.get(endpoints.gameById + id)
}

export async function createGame(data){
    console.log(data)
    return api.post(endpoints.create, data)
}

export async function deleteGame(id){
    return api.del(endpoints.delete + id)
}

export async function editGame(id, data){
    return api.put(endpoints.edit + id, data)
}


export async function getMyItems(userId){
    return api.get(endpoints.myItems(userId))
}

export async function postComment(data){
    return api.post(endpoints.comments, data)
}

export async function getGameComments(commentId){
    return api.get(endpoints.gameComments(commentId)) 
    
}



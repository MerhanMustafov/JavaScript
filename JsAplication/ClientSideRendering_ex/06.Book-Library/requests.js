const url = `http://localhost:3030/jsonstore/collections/books/`

export async function get(){
    const res = await fetch(url)
    return await res.json()
}

export async function getBookById(id){
    try{
        const res = await fetch(url + id)
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        return await res.json()
    }catch (err) {
        alert(err.message);
    }
}

export async function post(book){
    try{
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        })
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        return await res.json()

    }catch (err) {
        alert(err.message);
    }
}


export async function put(book, id){
    try{
        const res = await fetch(url + id, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        })
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const result = await res.json()
        console.log(result)

    }catch (err) {
        alert(err.message);
    }
}


export async function del(id){
    await fetch(url + id, {
        method: 'delete',
    })
}
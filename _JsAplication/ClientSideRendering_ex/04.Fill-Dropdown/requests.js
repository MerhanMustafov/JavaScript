

export async function get(){
    const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
    try{
        const res = await fetch(url)
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const data = await res.json()
        return data
    
    }catch (err){
        alert(err.message);

    }
}

export async function post(data){
    const url = `http://localhost:3030/jsonstore/advanced/dropdown`
    try{
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        if (res.ok !== true){
            const error = await res.json();
            throw new Error(error.message)
        }
        const result = await res.json()
        return result
    }catch (err) {
        alert(err.message);
    }

}


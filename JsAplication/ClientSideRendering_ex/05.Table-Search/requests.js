export async function getData(){
    const url = `http://localhost:3030/jsonstore/advanced/table` 
    const res = await fetch(url)
    const data = await res.json()
    return data
}

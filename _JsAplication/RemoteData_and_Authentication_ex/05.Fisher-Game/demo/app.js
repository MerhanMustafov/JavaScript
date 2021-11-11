async function get(){
    const res = await fetch(`http://localhost:3030/users/login`)
    console.log(res)
    const result = await res.json()
    console.log(result)
}

get()
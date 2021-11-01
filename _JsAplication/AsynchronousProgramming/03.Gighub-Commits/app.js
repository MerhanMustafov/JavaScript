function loadCommits() {
    let username = document.querySelector('#username').value
    let repo = document.querySelector('#repo').value
    let url = `https://api.github.com/repos/${username}/${repo}/commits`

    let commits = document.querySelector('#commits')
    getRepoCommitsInfo()
    async function getRepoCommitsInfo(){
        try{
            let response = await fetch(url)
            if (response.ok !== true ){
                throw new Error(`${response.status} (${response.statusText})`)
            }
            let data = await response.json()
            for (let repo of data){
                let li = `<li>${repo.commit.author.name} ${repo.commit.message}</li>.`
                // commits.appendChild(li)
                commits.innerHTML += li
            }
        }catch (err) {
            let li = `<li>${err}</li>.`
            commits.appendChild(li)
        }
    }
}   
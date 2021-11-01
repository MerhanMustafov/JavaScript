function loadRepos() {
	let username = document.querySelector('#username').value
	let url = `https://api.github.com/users/${username}/repos`

	let repos = document.querySelector("#repos")

	async function takeAllRepos() {
		try{
			let response = await fetch(url)
			repos.innerHTML = ''
			
			if(response.ok !== true){
				throw new Error(`${response.status} ${response.statusText}`)
			}
			
			let data = await response.json()
			for (let index = 0; index < data.length; index++){
				let li = cElement(index)
				repos.appendChild(li)
			}

			function cElement(i){
				let repo_url = data[i].html_url
				let repo_name = data[i].full_name
				let li= document.createElement('li')
				let a = document.createElement('a')
				a.setAttribute('href', `${repo_url}`)
				a.textContent = `${repo_name}`
				li.appendChild(a)
				return li
			}

			
		}catch (err) {
			repos.innerHTML += `<li>${err}</li>`
		}
	}
	takeAllRepos()
}
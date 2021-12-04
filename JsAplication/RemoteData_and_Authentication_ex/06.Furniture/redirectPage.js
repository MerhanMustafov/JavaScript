export function redirectPage(string){
    if (string == 'logged' || string == 'registered'){
        window.location = './homeLogged.html'
    }
    else if (string == 'loggedout'){
        window.location = './home.html'
    }
}
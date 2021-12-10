const hendlers = {}


function match(url){
    const hendler = hendlers[url]

    if(hendler == undefined){
        return defaultHendler 
    }else {
        return hendler
    }
}

function registerHendler(url, hendler){
    hendlers[url] = hendler
}

function defaultHendler(req, res){
    res.statusCode = 404
    res.write('NOT FOUND');
    res.end()
}


module.exports = {
    registerHendler,
    match
}
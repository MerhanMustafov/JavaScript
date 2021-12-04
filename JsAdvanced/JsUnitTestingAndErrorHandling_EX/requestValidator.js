function solve(obj){
    if (obj.method===undefined || !['GET', 'POST', 'DELETE', 'CONNECT'].includes(obj.method)){
        throw Error("Invalid request header: Invalid Method")
    }if (obj.uri===undefined || !/^([A-Za-z0-9\.]+|\*)$/gm.test(obj.uri) || !obj.uri){
        throw Error("Invalid request header: Invalid URI")
    }if (obj.version===undefined || !['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ].includes(obj.version)){
        throw Error("Invalid request header: Invalid Version")
    }if (obj.message===undefined || !(/^[^<>\\&'"]*$/gm.test(obj.message))){
        throw Error("Invalid request header: Invalid Message")
    }
    return obj;
}

console.log(solve({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}
));
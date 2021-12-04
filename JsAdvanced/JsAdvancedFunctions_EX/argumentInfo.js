function solve(...param){
    let occurences = {}
    let result = []
    param.forEach(el => {
        let type = typeof(el);
        result.push(`${type}: ${el}`)
        if (occurences[type] !== undefined){
            occurences[type]++
        }else{
            occurences[type] = 1
        }
    });
    let sortedKeys = Object.keys(occurences)
    .sort((a,b) => occurences[b] - occurences[a]);
    sortedKeys.forEach(key => result.push(`${key} = ${occurences[key]}`))

    return result.join('\n')
    
}

console.log(solve('cat', 42, 22, function () { console.log('Hello world!'); }))
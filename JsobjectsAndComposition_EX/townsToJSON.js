function toJSON(rowInfoArray){
    let tablesInfo = []
    
    for  (let el of rowInfoArray){
        let [town, latitude, longitude] = el.split(' | ')
        let t = town.slice(2, town.length);
        latitude = Number(latitude)
        let lo = Number(longitude.slice(0, longitude.length - 2));
        tablesInfo.push(info = {
            Town: t,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(lo.toFixed(2))
        })
    }
    return JSON.stringify(tablesInfo.slice(1, tablesInfo.length))
}

console.log(toJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
))


// num = 5.5454544
// console.log(typeof num.toFixed(2));
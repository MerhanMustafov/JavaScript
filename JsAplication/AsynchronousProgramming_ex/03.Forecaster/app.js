function attachEvents() {
    document.getElementById('submit').addEventListener('click', displayForecast)
}

attachEvents();

async function displayForecast(){
    const currentForecast = document.getElementById('current');
    const upcomingForecast = document.getElementById('upcoming');
    const forecastInfo = document.getElementById('forecast');

    const code = await getLocationCode()
    if(code == undefined){
        return;
    }
    if (document.getElementById('error')){
        document.getElementById('error').remove()
    }
    if (document.querySelector('.forecasts') || document.querySelector('.forecast-info')){
        document.querySelector('.forecasts').remove()
        document.querySelector('.forecast-info').remove()
    }


    
    const [current, threeDaysAhead] = await Promise.all([
        getCurrentCondition(code),
        getThreeDayForecast(code),
    ]);
    
    
    let curForecast = e(
        'div', {className: 'forecasts'}, false,
        e('span', {className: 'condition symbol'}, false,"☀"),
        e('span', {className: 'condition'}, false,
            e('span', {className: 'forecast-data'},false, current.name),
            e('span', {className: 'forecast-data'}, false,`${`${current.forecast.low}°/${current.forecast.high}°`}`),
            e('span', {className: 'forecast-data'}, false,current.condition)),
        
        );
    currentForecast.appendChild(curForecast)
    

    let foreCastInfoSection = e('div', {className: 'forecast-info'}, undefined)
    upcomingForecast.appendChild(foreCastInfoSection)
    threeDaysAhead.forecast.forEach(w => {
        let forThreeDays = e('span', {className: 'upcoming'},false,
                e('span', {className: 'symbol'}, false,'⛅'),
                e('span', {className: 'forecast-data'},false, `${`${w.low}°/${w.high}°`}`),
                e('span', {className: 'forecast-data'},false, w.condition));

        foreCastInfoSection.appendChild(forThreeDays)

    });
    forecastInfo.style.display = 'block';
}


async function getLocationCode(){
    try{
        const input = document.querySelector('#location')
        const res = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        if (res.status != 200){
            throw new Error(`${res.status} ${res.statusText}`)
        }

        const data = await res.json()
        const code = data.filter(d => d.name == input.value).map(f => f.code)[0]
        if (code == undefined){
            throw new Error(`NOT FOUND`)
        }
        return code
    }catch (err) {
        if (document.querySelector('.forecasts') || document.querySelector('.forecast-info')){
            document.querySelector('.forecasts').remove()
            document.querySelector('.forecast-info').remove()
        }
        if (!document.getElementById('error')){

            let forecastSection = document.getElementById('forecast')
            console.log(typeof err)
            let Error = e('h1', {id: 'error'}, true, err)
            forecastSection.firstElementChild.appendChild(Error)
            forecastSection.style.display = 'block';
        }
    }

}



async function getCurrentCondition(code){
    const res = await fetch(`http://localhost:3030/jsonstore/forecaster/today/` + code)
    const data = await res.json()
    return data

}

async function getThreeDayForecast(code){
    const res = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/` + code)
    let data = await res.json()
    return data

}


function e(tagName, atr, isErr = false, ...content){
    let result = document.createElement(tagName)
    let atributes = Object.keys(atr)
    if (atributes.length > 0){
        atributes.forEach(a => result[a] = atr[a])
    }
    content.forEach(el => {
        if (typeof el == 'object'){
            if (isErr == true){
                result.textContent = el
            }else{
                result.appendChild(el)
            }
        }else{
            result.textContent = content[0]
        }
    })
    return result
}
    
        






/* 
const Sunny = `&#x2600`; // ☀
const PartlySunny = `&#x26C5`; // ⛅
const Overcast = `&#x2601`; // ☁
const Rain = `&#x2614`; // ☂
const Degrees =`&#176`;   // °
*/
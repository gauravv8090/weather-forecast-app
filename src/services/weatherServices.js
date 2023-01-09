const API_KEY = 'c0283e68fe792e39b63847f7d0348ae2';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';


const getWeatherData = (infoType, searchParams)=>{
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

     return fetch(url).then((res)=> res.json()).then((data)=> data);

}

// export default getWeatherData;

const formatCurrentWeather = (data)=>{
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind : {speed}
    } = data;

    const {main:details, icon} = weather[0];

    return { lat, lon,temp, feels_like, temp_min, temp_max,
         humidity, name, dt, country, sunrise, sunset, speed, details, icon  }
}

const getFormattedData = async (searchParams)=>{
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
    return formattedCurrentWeather
}

export default getFormattedData;
import { DateTime } from "luxon";
// const API_KEY = "c0283e68fe792e39b63847f7d0348ae2";
// const API_KEY = "b18614dd43ffde2c8b00be277d48f4da";
const API_KEY = "047ef9c3516e552807a6bbd0067851ce";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};

// export default getWeatherData;

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    speed,
    details,
    icon,
  };
};

const doFormatForcastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map(ele=>{
    return {
        title : fromatToLocalTime(ele.dt, timezone, 'ccc'),
        temp : ele.temp.day,
        icon : ele.weather[0].icon
    }
  });


  hourly = hourly.slice(1, 6).map(ele=>{
    return {
        title : fromatToLocalTime(ele.dt, timezone, 'hh:mm a'),
        temp : ele.temp,
        icon : ele.weather[0].icon
    }
  });


  return {timezone, daily, hourly}
};

const getFormattedData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(doFormatForcastWeather);

  return {...formattedCurrentWeather, ...formattedForecastWeather };
};

const fromatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedData;

export {fromatToLocalTime, iconUrlFromCode}

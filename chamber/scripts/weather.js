/*------  WEATHER API  ------*/
//Get lat and lon
const lat = -23.55052;
const lon = -46.633308;

const apiKey = '0c8a48091627e17ece4ad85f202a2799'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  let te = jsObject.main.temp;
  let tmin = jsObject.main.temp_min;
  let tmax = jsObject.main.temp_max;
  let humidity = jsObject.main.humidity;
  let srise = jsObject.sys.sunrise;
  let sset = jsObject.sys.sunset;

  //hours
  const sunriseDate = new Date(srise * 1000);
  const sunsetDate = new Date(sset * 1000);

  const options = { hour: "numeric", minute: "numeric", hour12: true };

  let sr = (sunriseDate.toLocaleTimeString("en-US", options)).replace("AM", "am").replace("PM", "pm").replace(/\s+am/, "am").replace(/\s+pm/, "pm");
  let ss = (sunsetDate.toLocaleTimeString("en-US", options)).replace("AM", "am").replace("PM", "pm").replace(/\s+am/, "am").replace(/\s+pm/, "pm");

  document.querySelector('#temp').textContent = `${te} °C`;  //t
  document.querySelector("#h-temp").textContent = `${tmin} °C`;
  document.querySelector("#l-temp").textContent = `${tmax} °C`;
  document.querySelector("#humidity").textContent =  `${humidity} %`;
  document.querySelector("#sun-rise").textContent = `${sr}`;
  document.querySelector("#sun-set").textContent = `${ss}`;


  const desc = jsObject.weather[0].description; //w-now
  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;

  const icon = document.querySelector(".icon");
  let img = document.createElement("img");
  img.setAttribute('src', iconsrc);
  img.setAttribute('alt', desc);

  icon.appendChild(img);
  document.querySelector('#condit').textContent = desc;

}); 

//Forecast
async function forecast() {
  const requestURL =  "https://api.openweathermap.org/data/2.5/forecast?id=3448439&units=metric&appid=0c8a48091627e17ece4ad85f202a2799";

  const res = await fetch(requestURL);
  const data = await res.json();

  const tempsByDate = {};

  // Agrupar entradas por fecha
  data.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0]; // "2025-10-04"
    if (!tempsByDate[date]) tempsByDate[date] = [];
    tempsByDate[date].push(item.main.temp);
  });

  const dates = Object.keys(tempsByDate).slice(0, 3); // Hoy, mañana, pasado mañana

  const forecast = dates.map(date => {
    const temps = tempsByDate[date];
    return {
      date,
      tempMin: Math.min(...temps),
      tempMax: Math.max(...temps),
      tempAvg: (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1)
    };
  });

  //Days of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const afterTomP = new Date();
afterTomP.setDate(today.getDate() + 2);

  let todayP = document.querySelector("#today");
  let tomorrowP = document.querySelector("#tomorrow");
  let afterTom = document.querySelector("#afterTom");

  todayP.textContent =  `Today: ${forecast[0].tempAvg} °`;
  tomorrowP.textContent = `${days[tomorrow.getDay()]}: ${forecast[1].tempAvg} °`;
  afterTom.textContent = `${days[afterTomP.getDay()]}: ${forecast[2].tempAvg} °`;

}

forecast();
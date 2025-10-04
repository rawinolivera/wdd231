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

  let sr = (sunriseDate.toLocaleTimeString("en-US", options)).replace("AM", "am").replace("PM", "pm");
  let ss = (sunsetDate.toLocaleTimeString("en-US", options)).replace("AM", "am").replace("PM", "pm");

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

  let windchill = "";

  if (te < 10 && sp >= 4.8){
      windchill = windChill(te, sp);
      windchill = `${windchill} °C`;
  } else {
      windchill = "N/A";
  } 
  //output
  document.querySelector("#w-chill").innerHTML = windchill;

  function windChill(te,sp) {
    return Math.round((13.12 + 0.6215 * te - 11.37 * Math.pow(sp, 0.16) + 0.3965 * te * Math.pow(sp, 0.16)) * 100) / 100;
  }
}); 

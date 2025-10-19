import { getRandomQuote } from "./quotes.js";
import { localMessage } from "./localMessage.js";

var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("ul");
const span = document.querySelector("#top");
const actBtn = document.querySelector("#c-link");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
  span.classList.toggle("open");

});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 500) {
    navigation.classList.remove("open");
	  hamButton.classList.remove("open");
    span.classList.remove("open");
  }
});

/*   Menu location   */
function homeItems() {

  //Get lat and lon
  const lat = -23.55052;
  const lon = -46.633308;

  /*------  WEATHER API  ------*/
  const apiKey = '0c8a48091627e17ece4ad85f202a2799'
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let te = jsObject.main.temp;
    let sp = jsObject.wind.speed;
    document.querySelector('#temp').textContent = `${te} °C`;  //t
    document.querySelector('#wind').textContent = `${sp} Km`;  //s


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

  // Random quote 
  const randomQuote = getRandomQuote();

  document.querySelector(".quote").textContent = `${randomQuote.quote}`;
  document.querySelector(".autor").textContent = `— ${randomQuote.author}`;

}


const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop() || 'index.html';

if (currentPage === 'index.html') {
  homeItems();
  localMessage();

  
  const actBtn = document.querySelector("#c-link");
  hamButton.addEventListener("click", () => {
    actBtn.classList.toggle("open");
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 500) {
      actBtn.classList.remove("open");
    }
  });
}

if(currentPage === 'joinus.html'){
  setFormTime();
  const randomQuote = getRandomQuote();
  document.querySelector(".quote").textContent = randomQuote.quote;
  document.querySelector(".autor").textContent = `— ${randomQuote.author}`;
}

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  const isDisabled = link.dataset.disabled === "true";
  if (!isDisabled && linkPage === currentPage) {
    link.classList.add("active");
  }
});



function setFormTime() {
  const submit = document.querySelector("#submit");

  const timestamp = document.querySelector("#timestamp");
  submit.addEventListener("click", () => {
    const time = new Date();
    const formatted = time.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
    timestamp.value = `${formatted}`;
  });
}

if(currentPage === 'joinus.html'){
  setFormTime();
}
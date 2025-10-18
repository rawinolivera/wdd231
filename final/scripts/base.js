var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("ul");
const span = document.querySelector("#top");

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


  //Random Quotes Data
  const quotes = [
    {
      "quote": "Programs are primarily meant to be read and understood by humans first, and only incidentally executed by computers for results.",
      "author": "Donald Knuth"
    },
    {
      "quote": "There are only two kinds of programming languages: those that people always complain about endlessly and those that nobody ever actually uses.",
      "author": "Bjarne Stroustrup"
    },
    {
      "quote": "The most dangerous phrase in the programming language is always, 'We have always done it this way,' which stops innovation and learning.",
      "author": "Grace Hopper"
    },
    {
      "quote": "Talk is cheap and anyone can say many things, but what truly matters in software development is to actually show me the working code.",
      "author": "Linus Torvalds"
    },
    {
      "quote": "Writing good code is not only about functionality but also about readability and maintainability, because good code is its own best documentation.",
      "author": "Steve McConnell"
    },
    {
      "quote": "First, fully understand and solve the problem at hand with clear thinking, and only afterwards proceed to write the actual code implementation efficiently.",
      "author": "John Johnson"
    }
  ]

  // Random quote 
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  const randomQuote = getRandomQuote();

  document.querySelector(".quote").textContent = `${randomQuote.quote}`;
  document.querySelector(".autor").textContent = `— ${randomQuote.author}`;

}


const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop() || 'index.html';

if (currentPage === 'index.html') {
  homeItems();
}

if(currentPage === 'joinus.html'){
  setFormTime();
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
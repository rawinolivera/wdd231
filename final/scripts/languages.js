function displayLanguages(lang, container) {
let card = document.createElement("section");
let dialog = document.querySelector("dialog");
const di = document.querySelector("#di");
//let figure = document.createElement("figure");
//let image = document.createElement("img");
let name = document.createElement("h2");
let paradig = document.createElement("p");
let org = document.createElement("p");
let year = document.createElement("h3");
let history = document.querySelector("p")
let btnOpen = document.createElement("button");
let btnClose = document.createElement("button");


//image.className = "img";
//image.loading ="lazy";
//image.src = `${place.imagelink}`;
//image.alt = `${place.name} photo`;
dialog.id = `${place.id}`;
name.textContent = `${place.name}`;
name.className = "m-name";
paradig.textContent = `${place.paradigm}`;
org.textContent = `${place.organization}`;
year.textContent = `${place.year}`;
history.textContent = `${place.history}`;
btnOpen.textContent = "Learn More";

//figure.appendChild(image);
//card.appendChild(figure);
card.appendChild(name);
card.appendChild(org);
card.appendChild(year);
card.appendChild(button);

container.appendChild(card);

dialog.appendChild(name);
dialog.appendChild(history);
dialog.appendChild(btnClose)

di.appendChild(dialog);

}

//data
const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/languages.json";
const dir = document.querySelector("#interest");

async function loadInterest() {
  try {
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const places = jsonObject['places'];
    places.forEach(p => displayPlaces(p, dir));
  } catch (error) {
    console.error("Interest Places not found:", error);
  }
}

if (dir) {
  loadInterest();
}

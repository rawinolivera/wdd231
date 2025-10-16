function displayLanguages(lang, container) {
let card = document.createElement("section");
let dialog = document.createElement("dialog");
let title = document.createElement("h2");
const di = document.querySelector("#di");
//let figure = document.createElement("figure");
//let image = document.createElement("img");
let name = document.createElement("h2");
let paradig = document.createElement("p");
let org = document.createElement("p");
let year = document.createElement("h3");
let history = document.createElement("p")
let btnOpen = document.createElement("button");
let btnClose = document.createElement("button");


//image.className = "img";
//image.loading ="lazy";
//image.src = `${lang.imagelink}`;
//image.alt = `${lang.name} photo`;
dialog.id = `${lang.id}`;
title.textContent = `${lang.name}`;
btnClose.id = `close-${lang.id}`;
btnClose.textContent = "Close";
name.textContent = `${lang.name} Language`;
name.className = "m-name";
paradig.textContent = `${lang.paradigm}`;
org.textContent = `${lang.organization}`;
year.textContent = `Release year: ${lang.year}`;
history.textContent = `${lang.history}`;
btnOpen.id = `open-${lang.id}`;
btnOpen.textContent = "Learn More";

//figure.appendChild(image);
//card.appendChild(figure);
card.appendChild(name);
card.appendChild(org);
card.appendChild(year);
card.appendChild(btnOpen);

container.appendChild(card);

dialog.appendChild(title);
dialog.appendChild(history);
dialog.appendChild(btnClose)

di.appendChild(dialog);

}

//data
const requestURL = "https://rawinolivera.github.io/wdd231/final/data/lenguages.json";
const dir = document.querySelector("#lang");

async function loadInterest() {
  try {
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const languages = jsonObject['languages'];
    languages.forEach(l => displayLanguages(l, dir));
  } catch (error) {
    console.error("Interest Places not found:", error);
  }
}

if (dir) {
  loadInterest();
}

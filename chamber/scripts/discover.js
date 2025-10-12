function displayPlaces(place, container) {
let card = document.createElement("section");
let name = document.createElement("h2");
let figure = document.createElement("figure");
let image = document.createElement("img");
let address = document.createElement("address");
let description = document.createElement("p");
let button = document.createElement("button");

name.textContent = `${place.name}`;
name.className = "m-name";
address.textContent = `${place.address}`;
description.textContent = `${place.description}`;
image.className = "img";
image.src = `${place.imagelink}`;
image.alt = `${place.name} photo`;
button.textContent = "Learn More";

figure.appendChild(image);
card.appendChild(name);
card.appendChild(figure);
card.appendChild(address);
card.appendChild(description);
card.appendChild(button);

container.appendChild(card);
}

//data
const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/interestplaces.json";
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
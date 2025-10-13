function displayPlaces(place, container) {
let card = document.createElement("section");
let figure = document.createElement("figure");
let image = document.createElement("img");
let name = document.createElement("h2");
let address = document.createElement("address");
let description = document.createElement("p");
let button = document.createElement("button");


image.className = "img";
image.src = `${place.imagelink}`;
image.alt = `${place.name} photo`;
name.textContent = `${place.name}`;
name.className = "m-name";
address.textContent = `${place.address}`;
description.textContent = `${place.description}`;
button.textContent = "Learn More";

figure.appendChild(image);
card.appendChild(figure);
card.appendChild(name);
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
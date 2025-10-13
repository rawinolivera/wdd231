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

//local storage
let lastVisite = localStorage.getItem('lastVisit');
let now = new Date();
const msg = document.querySelector("#msg");
const modalOpen = document.querySelector("#openMsg");
const modalClose = document.querySelector("#closeMsg")

console.log(lastVisite)

if (!lastVisite) {
  localStorage.setItem('lastVisit', now)
  console.log("Welcome! Let us know if you have any questions.")
  msg.textContent = "Welcome! Let us know if you have any questions.";
} else {

  let last = new Date(lastVisite);
  let milisec = now - last;

  let count = milisec / 86400000;
  count = Math.trunc(count);
  if(count < 1) {
    console.log("Back so soon! Awesome!")
    msg.textContent = "Back so soon! Awesome!";
  } else if (count === 1) {
    console.log("You last visited " + count + " day ago.");
    msg.textContent = `You last visited ${count} day ago.`;
  } else {
    console.log("You last visited " + count + " days ago.")
    msg.textContent = `You last visited ${count} days ago.`;
  }
  localStorage.setItem('lastVisit', now)
}

document.addEventListener("DOMContentLoaded", () => {
  modalOpen.showModal();
});

modalClose.addEventListener("click", () => {
  modalOpen.close();
})





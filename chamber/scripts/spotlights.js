//Spotlights data
import { displayMembers } from "./directory.js";
const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/members.json";
const dir = document.querySelector("#spotlights");

function getRandomItems(arr, n) {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

async function loadDirectory() {
  try {
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const members = jsonObject['members'];
    const filtered = members.filter(member => [1,2].includes(member.membership_level));
    let numberOfMembers = window.innerWidth >= 1024 ? 3 : 2; 
    const randomMembers = getRandomItems(filtered, numberOfMembers);

    randomMembers.forEach(m => displayMembers(m, dir));
  } catch (error) {
    console.error("Members not found:", error);
  }
}

loadDirectory();




//Events
const requestURLe = "https://rawinolivera.github.io/wdd231/chamber/data/events.json";
const dirE = document.querySelector("#events");

const asyncFunction = async () => {
  try {
    const response = await fetch(requestURLe);
    const jsonObject = await response.json();
    const members = jsonObject['events'];
    members.forEach(displayEvents);
  } catch (error) {
    console.error("Events not found:", error);
  }
};

asyncFunction();

function displayEvents(event) {
  let card = document.createElement("div");
  let name = document.createElement("p");
  let location = document.createElement("p");
  let date = document.createElement("p");
  let time = document.createElement("p");
  let entry = document.createElement("p");

  name.textContent = `${event.name}`;
  name.className = "m-name";
  location.textContent = `${event.location}`;
  date.textContent = `${event.date}`;
  time.textContent = `${event.time}`;
  entry.textContent = `${event.entry}`;
  entry.className = "aqui";

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(date);
  card.appendChild(time);
  card.appendChild(entry);
  dirE.appendChild(card);
}
//Events

const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/events.json";
const dir = document.querySelector("#events");

const asyncFunction = async () => {
  try {
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const members = jsonObject['events'];
    members.forEach(displayMembers);
  } catch (error) {
    console.error("Events not found:", error);
  }
};

asyncFunction();

  function displayMembers(event) {
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

    
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(date);
    card.appendChild(time);
    card.appendChild(entry);
    dir.appendChild(card);
  }
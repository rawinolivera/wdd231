function displayMembers() {
let card = document.createElement("section");
let name = document.createElement("p");
let address = document.createElement("p");
let description = document.createElement("p");
let image = document.createElement("img");

name.textContent = `${member.name}`;
name.className = "m-name";
address.textContent = `${member.address}`;
phoneNumber.textContent = `${member.phone_number}`;
url.href = `${member.website_url}`;
url.textContent = `${member.website_url}`;
url.target = "_blank";
image.className = "img";
image.src = `${member.icon_url}`;
image.alt = `Company Official Logo`;

card.appendChild(name);
card.appendChild(image);
card.appendChild(address);
card.appendChild(phoneNumber);
card.appendChild(url);

container.appendChild(card);
name.style.display = "none";
}

//data
const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/interestplaces.json";
const dir = document.querySelector("#interest");

async function loadInterest() {
  try {
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const place = jsonObject['members'];
    members.forEach(m => displayMembers(m, dir));
  } catch (error) {
    console.error("Members not found:", error);
  }
}
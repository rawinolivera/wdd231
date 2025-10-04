//export displayMember function
export function displayMembers(member, container) {
let card = document.createElement("section");
let name = document.createElement("p");
let address = document.createElement("p");
let phoneNumber = document.createElement("p");
let url = document.createElement("a");
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
const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/members.json";
const dir = document.querySelector("#directory");

async function loadDirectory() {
  try {
    const response = await fetch(requestURL);
    const jsonObject = await response.json();
    const members = jsonObject['members'];
    members.forEach(m => displayMembers(m, dir));
  } catch (error) {
    console.error("Members not found:", error);
  }
}

//condition
if (dir) {
  loadDirectory();

  const grid = document.querySelector("#grid");
  const list = document.querySelector("#list");

  grid.addEventListener("click", function() {
    const names = document.querySelectorAll(".m-name");
    const imgs = document.querySelectorAll(".img");
    imgs.forEach(imagen => {
      imagen.style.display = "inline-block";
    }); 
    names.forEach(na => {
      na.style.display = "none";
    })
    dir.classList.remove("list")
    dir.classList.add("grid");
  })

  list.addEventListener("click", function() {
    const names = document.querySelectorAll(".m-name");
    const imgs = document.querySelectorAll(".img");
    imgs.forEach(imagen => {
      imagen.style.display = "none";
    }); 
    names.forEach(na => {
      na.style.display = "block";
    })
    dir.classList.remove("grid")
    dir.classList.add("list");
  })
}
const requestURL = "https://rawinolivera.github.io/wdd231/chamber/data/members.json";
const dir = document.querySelector("#directory");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    members.forEach(displayMembers);
  });

  function displayMembers(member) {
    let card = document.createElement("section");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phoneNumber = document.createElement("p");
    let url = document.createElement("a");
    let image = document.createElement("img");
    let membership = document.createElement("p");
    let otherInfo = document.createElement("p");

    
    name.textContent = `${member.name}`;
    name.className = "m-name";
    address.textContent = `${member.address}`;
    phoneNumber.textContent = `${member.phone_number}`;
    url.href = `${member.website_url}`;
    url.textContent = `${member.website_url}`;
    url.target = "_blank";
    image.className = "img";
    image.src = `${member.icon_url}`;
    image.alt = `Company Offial Logo`;
    membership.textContent = `${member.membership_level}`;
    otherInfo.textContent = `${member.other_info}`;

    
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(url);
    //card.appendChild(membership);
    //card.appendChild(otherInfo);
    dir.appendChild(card);
    dir.className = "grid";

    name.style.display = "none";
  }

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
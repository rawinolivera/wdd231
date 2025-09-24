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
    address.textContent = `${member.address}`;
    phoneNumber.textContent = `${member.phone_number}`;
    url.href = `${member.website_url}`;
    url.target = "_blank";
    image.src = `${member.icon_url}`;
    image.alt = `Company Offial Logo`;
    membership.textContent = `${member.membership_level}`;
    otherInfo.textContent = `${member.other_info}`;

    card.appendChild(name); 
    card.appendChild(address); 
    card.appendChild(phoneNumber); 
    card.appendChild(url); 
    card.appendChild(image); 
    card.appendChild(membership); 
    card.appendChild(otherInfo); 
    dir.appendChild(card); 
  }
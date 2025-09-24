const requestURL = "https://rawinolivera.github.io/wdd231/chamber/scripts/members.json";
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
    
  }
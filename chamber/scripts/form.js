const inputs = new URLSearchParams(window.location.search);

const firstName = inputs.get('firstName');
const lastName = inputs.get('lastName');
const userEmail = inputs.get('userEmail');
const mobPhone = inputs.get('mobPhone');
const orgName = inputs.get('orgName');
const timestamp = inputs.get('timestamp');

const cont = document.querySelector("#dataForm");

let table = document.createElement("table");

let rname = document.createElement("tr");
let c1name = document.createElement("th");
let c2name = document.createElement("th");
c1name.textContent = "First Name:";
c2name.textContent = `${firstName}`;
rname.appendChild(c1name);
rname.appendChild(c2name);
table.appendChild(rname);

let rlast = document.createElement("tr");
let c1last = document.createElement("th");
let c2last = document.createElement("th");
c1last.textContent = "Last Name:";
c2last.textContent = `${lastName}`;
rlast.appendChild(c1last);
rlast.appendChild(c2last);
table.appendChild(rlast);

let remail = document.createElement("tr");
let c1email = document.createElement("th");
let c2email = document.createElement("th");
c1email.textContent = "Email:";
c2email.textContent = `${userEmail}`;
remail.appendChild(c1email);
remail.appendChild(c2email);
table.appendChild(remail);

let rphone = document.createElement("tr");
let c1phone = document.createElement("th");
let c2phone = document.createElement("th");
c1phone.textContent = "Phone Number:";
c2phone.textContent = `${mobPhone}`;
rphone.appendChild(c1phone);
rphone.appendChild(c2phone);
table.appendChild(rphone);

let rbussiness = document.createElement("tr");
let c1bussiness = document.createElement("th");
let c2bussiness = document.createElement("th");
c1bussiness.textContent = "Organization's Name:";
c2bussiness.textContent = `${orgName}`;
rbussiness.appendChild(c1bussiness);
rbussiness.appendChild(c2bussiness);
table.appendChild(rbussiness);

let rtimestamp = document.createElement("tr");
let c1timestamp = document.createElement("th");
let c2timestamp = document.createElement("th");
c1timestamp.textContent = "Loaded at:";
c2timestamp.textContent = `${timestamp}`;
rtimestamp.appendChild(c1timestamp);
rtimestamp.appendChild(c2timestamp);
table.appendChild(rtimestamp);


cont.appendChild(table);
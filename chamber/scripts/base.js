var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("ul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 500) {
    navigation.classList.remove("open");
	  hamButton.classList.remove("open");
  }
});

const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

const submit = document.querySelector("#submit");
if(submit){
  const time = new Date();
  const formatted = time.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const timestamp = document.querySelector("#timestamp");
  submit.addEventListener("click", () => {
    timestamp.value = `${formatted}`;
  });
}

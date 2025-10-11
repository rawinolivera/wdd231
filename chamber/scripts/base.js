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

/*   Menu location   */
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  const isDisabled = link.dataset.disabled === "true";
  if (!isDisabled && linkPage === currentPage) {
    link.classList.add("active");
  }
});
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

/*  MODAL  */ 

const npbtn = document.querySelector("#npbtn");
const npdi = document.querySelector("#np-di");
const closenp = document.querySelector("#closeNP");

npbtn.addEventListener("click", function(event) {
  event.preventDefault();
  npdi.showModal();
});

closenp.addEventListener("click", () => {
  npdi.close();
})

const bmbtn = document.querySelector("#bmbtn");
const bmdi = document.querySelector("#bm-di");
const closebm = document.querySelector("#closeBM");

bmbtn.addEventListener("click", function(event) {
  event.preventDefault();
  bmdi.showModal();
});

closebm.addEventListener("click", () => {
  bmdi.close();
});

const smbtn = document.querySelector("#smbtn");
const smdi = document.querySelector("#sm-di");
const closesm = document.querySelector("#closeSM");

smbtn.addEventListener("click", function(event) {
  event.preventDefault();
  smdi.showModal();
});

closesm.addEventListener("click", () => {
  smdi.close();
});

const gmbtn = document.querySelector("#gmbtn");
const gmdi = document.querySelector("#gm-di");
const closegm = document.querySelector("#closeGM");

gmbtn.addEventListener("click", function(event) {
  event.preventDefault();
  gmdi.showModal();
});

closegm.addEventListener("click", () => {
  gmdi.close();
})
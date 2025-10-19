export function localMessage() {
  //local storage
  let lastVisite = localStorage.getItem('lastVisit');
  let now = new Date();
  const msg = document.querySelector("#msg");
  const modalOpen = document.querySelector("#openMsg");
  const modalClose = document.querySelector("#closeMsg")
  let big = document.createElement("h2");
  big.appendChild(msg);
  modalOpen.appendChild(big);
  modalOpen.appendChild(modalClose);

  console.log(lastVisite)

  if (!lastVisite) {
    localStorage.setItem('lastVisit', now)
    msg.textContent = "Welcome! As this is your first visit, we invite you to browse through the interesting resources we have prepared for you on the Resources page.";
    window.addEventListener('DOMContentLoaded', function() {
      modalOpen.showModal();
    });
  } else {

    let last = new Date(lastVisite);
    let milisec = now - last;

    let count = milisec / 86400000;
    count = Math.trunc(count);
    if(count < 1) {
      console.log("No message for more than one visit the same day")
    } else {
      msg.textContent = "Haven’t joined us yet? Everyone is welcome to join and contribute, whether you’re a professional or a student. Just click the Contribute button to get started!";
      window.addEventListener('DOMContentLoaded', function() {
      modalOpen.showModal();
  });
    }
    localStorage.setItem('lastVisit', now)
  }



  modalClose.addEventListener("click", () => {
    modalOpen.close();
  })
}
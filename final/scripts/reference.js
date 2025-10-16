ref = [
  {
    "title": "Planning and Requirement Analysis",
    "url": "https://commons.emich.edu/cgi/viewcontent.cgi?article=1588&context=honors"
  },
  {
    "title": "System Design",
    "url": "https://hunterbusinessschool.edu/the-9-phases-of-the-systems-development-lifecycle-sdlc/"
  },
  {
    "title": "Implementation (Coding)",
    "url": "https://online.champlain.edu/blog/what-is-sdlc"
  },
  {
    "title": "Testing",
    "url": "https://hunterbusinessschool.edu/the-9-phases-of-the-systems-development-lifecycle-sdlc/"
  },
  {
    "title": "Deployment",
    "url": "https://online.champlain.edu/blog/what-is-sdlc"
  },
  {
    "title": "Maintenance",
    "url": "https://hunterbusinessschool.edu/the-9-phases-of-the-systems-development-lifecycle-sdlc/"
  }
]

const refCont = document.querySelector(".home-s1");

function createList (){
  let ol = document.createElement("ol");
  ref.forEach(item => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = `${item.title}`
    a.href = `${item.url}`
    a.target = `_blank`;

    li.appendChild(a);
    ol.appendChild(li);
  });
  refCont.appendChild(ol);
};

createList();
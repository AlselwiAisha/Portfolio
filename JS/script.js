/* mobile menu */
const menu = document.querySelector('#menu-icon');
const nav = document.querySelector('.nav-header');
const navBar = document.querySelector('.nav-bar');
const links = document.querySelector('.navbar-links');
const img0 = document.querySelector('.menuImage1');
const img2 = document.querySelector('.menuImage2');
const img1 = document.querySelector('.headerImage');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  links.classList.toggle('open-menu');
  img0.classList.toggle('view-img');
  img2.classList.toggle('view-img');
  img1.classList.toggle('h-img');
  nav.classList.toggle('heder-position');
  navBar.classList.toggle('view-img');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  links.classList.remove('open-menu');
  img0.classList.remove('view-img');
  img2.classList.remove('view-img');
  img1.classList.remove('h-img');
  nav.classList.remove('heder-position');
  navBar.classList.remove('view-img');
};

/* -----------------------main projects--------------------*/

const Projects = [
  {
    id: 1,
    image: './Images/1.png',
    desc: `[To-Do-list] This project is part of my Microverse exercises,
     where we start building a To-Do-list 
    application for storing a To-Do Tasks List.`,
    name: 'ToDo list',
    demo: 'https://alselwiaisha.github.io/To-Do-list-M2/dist/',
    source: 'https://github.com/AlselwiAisha/To-Do-list-M2',
  },
  {
    id: 2,
    image: './Images/2.png',
    desc: `[Portfolio] is my first microverse project. In this project,
    use HTML and CSS by adding an index and style file,
     we also used linters to analyze our source code to flag programming
      errors, bugs, stylistic errors, and suspicious 
      constructs in addition to creating the test file and putting 
      it in the gitignore to learn more about the gitignore file.`,
    name: 'Portfolio',
    demo: 'https://alselwiaisha.github.io/Portfolio/',
    source: 'https://github.com/AlselwiAisha/Portfolio',
  },
  {
    id: 3,
    image: './Images/3.png',
    desc: `[Awesome-books] is a simple HTML, CSS and JavaScript project.
    you can Add new book with author or delete `,
    name: 'Awesome-books',
    demo: 'https://alselwiaisha.github.io/Awesome-books-M2/',
    source: 'https://github.com/AlselwiAisha/Awesome-books-M2',
  },
  {
    id: 4,
    image: './Images/4.png',
    desc: ' a website to share informations about episodes of a TV show.',
    name: 'TV show',
    demo: 'https://alselwiaisha.github.io/JavaScriptGroupCapstone/dist/',
    source: 'https://github.com/AlselwiAisha/JavaScriptGroupCapstone',
  },
  {
    id: 5,
    image: './Images/5.png',
    desc: `"Space Travelers' Hub" is working with the real live data from the SpaceX API.
    This application for a company that provides commercial and scientific space travel services.
     The application will allow users to book rockets and join selected space missions. 
     Create the user interface using React.`,
    name: "Space Travelers' Hub",
    demo: 'https://space-travelers-hub-bvt6.onrender.com/',
    source: 'https://github.com/Chimoneg27/Travelers-Space-Hub',
  },
  {
    id: 6,
    image: './Images/6.png',
    desc: `This project is a web application that allows users to reserve
     books from a library. The user can also see the list of books that
      are available in the library. The user can reserve a book by clicking
       on the reserve button. The user can also see the list of books that
        they have reserved.`,
    name: 'Books Library',
    demo: 'https://page-to-page.onrender.com/',
    source: 'https://github.com/leloufadel/Page-To-page-Library-Frontend',
  },
];
function createProjectCard() {
  Projects.forEach((project) => {
    const sampleTemplateModal = `
    <div class="project prj${project.id}">
    <img src="${project.image}" alt="" />
    <div class="proj-card">
      <h2 class="proj-name white">${project.name}</h2>
      <ul class="proj-langs">
        <li><a href=""> HTML/CSS</a></li>
        <li><a href=""> Ruby on Rails</a></li>
        <li><a href=""> JavaScript</a></li>
      </ul>
      <button class="btn modal-btn" id="${project.id}">
        See this project <i class="bx bx-arrow-back"></i>
      </button>
    </div>
  </div>
`;
    const element = document.querySelector('.prj-sec');
    element.innerHTML += sampleTemplateModal;
  });
}
createProjectCard();

/* -----------------------popup window-------------------------*/

const openPopButtons = document.querySelectorAll('.modal-btn');
const overlay = document.querySelector('#overlay');
function createModal(image, desc, demo, source){
  const sampleTemplateModal = `
  <div class="modal-work">
  <div class="titleproj">
  <h2 class="proj-name main-color">Project name goes here</h2>
<img src="./Images/Union (1).png" alt="" class="data-close-button">
</div>
<ul class="proj-langs">
  <li><a href=""> HTML/CSS</a></li>
  <li><a href=""> Ruby on Rails</a></li>
  <li><a href=""> JavaScript</a></li>
</ul>
<div class="imgs-grop">
  <img src="${image}" alt="" class="main-img">
  <div class="NP-btn-img">
 <a href="#" class="btn-img"><i class="fa fa-angle-left"></i></a>
 <a href="#" class="btn-img"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
  </div>
  <div class="imgs">
    <img src="${image}" alt="">
    <img src="${image}" alt="">
    <img src="${image}" alt="">
    <img src="${image}" alt="">
  </div>
</div>
 <div class="desc">
<p class="prj-desc main-color">${desc}</p>
  <div class="Prj-btns">
  <a class="btn1" href='${demo}'>See live <i class="fa fa-external-link" ></i>
  </a>
  <a class="btn1" href='${source}'>See source <i class="fa fa-github" ></i>
  </a></div>
<div class="next-prev-btns">
  <button><i class="fa fa-arrow-left" aria-hidden="true"></i> Previous project 
  </button>
  <button>Next project <i class="fa fa-arrow-right" aria-hidden="true"></i> 
  </button>
  
</div>  
</div>
</div>

`;

  return sampleTemplateModal;
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openPopButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const name = e.target.id;
    const prj = Projects[name - 1];
    const modal = createModal(prj.image, prj.desc, prj.demo, prj.source);
    const element = document.createElement('div');
    element.innerHTML = modal;
    element.classList.add('modal');
    const addElement = document.getElementById('overlay');
    addElement.after(element);
    openModal(element);
    const closePopButtons = document.querySelectorAll('.data-close-button');
    closePopButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
      });
    });
  });
});

/* -----------------------validate contact form---------------------------*/
const form = document.querySelector('.contact-form');
const email = document.querySelector('#email');
const errMsg = document.querySelector('.err-msg');
const msgText = 'Please, write the email in lowercase';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errMsg.textContent = msgText;
    errMsg.style.display = 'flex';
    errMsg.style.color = 'red';
    errMsg.style.fontSize = '13px';
    errMsg.style.marginLeft = '20px';
    email.style.border = '1px solid red';
    e.preventDefault();
  } else {
    errMsg.style.display = 'none';
    email.style.border = '1px solid green';
  }
});

/* ---------------------preserve data in the browser----------------------*/
const uName = document.querySelector('#u-name');
const msg = document.querySelector('#message');

function getFormData() {
  const formData = {
    uName: uName.value,
    email: email.value,
    msg: msg.value,
  };
  return formData;
}

form.addEventListener('change', () => {
  const formData = getFormData();
  localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('formData'));
  if (data) {
    uName.value = data.uName;
    email.value = data.email;
    msg.value = data.msg;
  }
});

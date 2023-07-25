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
  },
  {
    id: 2,
    image: './Images/2.png',
  },
  {
    id: 3,
    image: './Images/3.png',
  },
  {
    id: 4,
    image: './Images/4.png',
  },
  {
    id: 5,
    image: './Images/5.png',
  },
  {
    id: 6,
    image: './Images/6.png',
  },
];
function createProjectCard() {
  Projects.forEach((project) => {
    const sampleTemplateModal = `
    <div class="project prj${project.id}">
    <img src="${project.image}" alt="" />
    <div class="proj-card">
      <h2 class="proj-name white">Project name goes here</h2>
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
function createModal(image) {
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
<p class="prj-desc main-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    <br><br>
                    Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
  <div class="Prj-btns">
<button class="btn">See live <i class="fa fa-external-link" ></i>
  </button>
  <button class="btn">See source <i class="fa fa-github" ></i>
  </button></div>
<div class="next-prev-btns
">
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
    const modal = createModal(prj.image);
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
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
/* mobile menu */
const menu = document.querySelector('#menu-icon');
const nav = document.querySelector('.nav-header');
const nav_bar = document.querySelector('.nav-bar');
const links = document.querySelector('.navbar-links');
const img_ = document.querySelector('.menuImage1');
const img_2 = document.querySelector('.menuImage2');
const img1 = document.querySelector('.headerImage');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  links.classList.toggle('open-menu');
  img_.classList.toggle('view-img');
  img_2.classList.toggle('view-img');
  img1.classList.toggle('h-img');
  nav.classList.toggle('heder-position');
  nav_bar.classList.toggle('view-img');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  links.classList.remove('open-menu');
  img_.classList.remove('view-img');
  img_2.classList.remove('view-img');
  img1.classList.remove('h-img');
  nav.classList.remove('heder-position');
  nav_bar.classList.remove('view-img');
};
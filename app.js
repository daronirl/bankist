'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const h1 = document.querySelector('h1');
const header = document.querySelector('header');
const message = document.createElement('div');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




message.classList.add('cookie-message');

message.innerHTML = 'We use cookies for improved functinality <button class="btn btn--close-cookie">Got it!</button>'
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});


// styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// attributes
const logo = document.querySelector('.nav__logo');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();

  e.target.getBoundingClientRect();
  section1.scrollIntoView({behavior: 'smooth'});
    
});



// const alertH1 = function () {
//   alert('Great! you are reading the heading ! :D');

//   h1.removeEventListener('mouseenter', alertH1);
// }

// h1.addEventListener('mouseenter', alertH1);


const randomInt = (min,max) => Math.floor(Math.random() * (max - min  + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  
});

document.querySelector('.nav').addEventListener('click', function (e) {
  
});


// PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// })


// Add event listener to common parent element
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
      console.log(id);
    }
});


// going downards : selecting child elements
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'white';

// going upwards selecting parents
// h1.closest('.header').style.background = 'orangered';

// going sideways selecting siblings
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.8)';
}); 


// tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause
  if (!clicked) return; 
  clicked.classList.add('operations__tab--active');
});
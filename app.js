'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

const header = document.querySelector('header');
const message = document.createElement('div');


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


  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //    top: s1coords.top + window.pageYOffset,
  //    behavior: 'smooth',  


     section1.scrollIntoView({behavior: 'smooth'});
});


const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', () => {
    alert('addEventListener: Great You are reading the heading!');
});
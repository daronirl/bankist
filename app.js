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


// const randomInt = (min,max) => Math.floor(Math.random() * (max - min  + 1) + min);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
  
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
  
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
  
// });


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
  

  // Guard clause
  if (!clicked) return; 

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate Tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
  
});


// Menu fade animation
const nav = document.querySelector('.nav');


const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
}

// Passing an argument into handler
nav.addEventListener('mouseover', handleHover.bind(0.5)); 
nav.addEventListener('mouseout', handleHover.bind(1)); 


// // Sticky navigation
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');

//   } else {
//     nav.classList.remove('sticky');
//   }
// });
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {

//   });
// }

// const observerOptions = {
//   root: null, 
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, observerOptions);
// observer.observe(section1);


// Intersection Observer API
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
  nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);


// Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);

}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.12,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
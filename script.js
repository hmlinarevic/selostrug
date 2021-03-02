const btnNavToggle = document.querySelector('#nav-toggle');
const btnNavClose = document.querySelector('#nav-close');
const navContent = document.querySelector('.nav__menu');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
const sectionAbout = document.querySelector('#section--about');
const btnScroll = document.querySelector('#btn--scroll-to');
const navList = document.querySelector('.nav__list');

class App {
  constructor() {
    btnNavToggle.addEventListener('click', this.toggleNavMenu);
    btnNavClose.addEventListener('click', this.closeNavMenu);
    nav.addEventListener('mouseover', this.handleHover.bind(0.1));
    nav.addEventListener('mouseout', this.handleHover.bind(1));
    navList.addEventListener('click', this.handleNavLinks);

    this.sayHi();
  }

  toggleNavMenu() {
    navContent.classList.toggle('nav__menu--show');
    // prevent scroll
    document.body.classList.add('stop-scrolling');
  }

  closeNavMenu() {
    navContent.classList.remove('nav__menu--show');
    // allow scroll
    document.body.classList.remove('stop-scrolling');
  }

  handleHover(e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('nav').querySelectorAll('.nav__link');

      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = this;
        }
      });
    }
  }

  handleNavLinks(e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
    }
  }
  sayHi() {
    console.log('hi there');
  }
}

new App();

// Intersection Observer
const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  entries.forEach((entry) => {
    // console.log(entry);
    // try setInterval
    if (!entry.isIntersecting) {
      header.classList.add('sticky');
      console.log('yay');
    } else header.classList.remove('sticky');
  });
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: `-${headerHeight}px`,
});

heroObserver.observe(hero);

// Scrolling to section
btnScroll.addEventListener('click', function () {
  const sectionCoords = sectionAbout.getBoundingClientRect();
  console.log(sectionCoords);
  // determine absolute position relative to document (entire page)
  // current position + current scroll
  // window.scrollTo({
  //   left: sectionCoords.left + window.pageXOffset,
  //   top: sectionCoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  sectionAbout.scrollIntoView({ behavior: 'smooth' });
});

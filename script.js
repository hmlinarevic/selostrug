const btnToggleNav = document.querySelector('#toggle-nav');
const btnCloseNav = document.querySelector('#close-nav');
const navContent = document.querySelector('.nav__menu');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');
const sectionAbout = document.querySelector('#section--about');
const btnScroll = document.querySelector('#btn--scroll-to');
const navList = document.querySelector('.nav__list');
const btn = document.querySelector('.nav__link--action');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn--close-modal');

class App {
  constructor() {
    btnToggleNav.addEventListener('click', this.toggleNavMenu);
    btnCloseNav.addEventListener('click', this.closeNavMenu);
    btnScroll.addEventListener('click', this.scrollToSection);

    // modal
    btn.addEventListener('click', this.toggleModal);
    btnCloseModal.addEventListener('click', this.toggleModal);
    overlay.addEventListener('click', this.toggleModal);

    nav.addEventListener('mouseover', this.handleHover.bind(0.1));
    nav.addEventListener('mouseout', this.handleHover.bind(1));
    nav.addEventListener('click', this.handleNavLinks);

    this.observeNav();
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

  observeNav() {
    const navHeight = nav.getBoundingClientRect().height;
    const stickyNav = function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);
        if (!entry.isIntersecting) {
          nav.classList.add('sticky');
        } else nav.classList.remove('sticky');
      });
    };

    const headerObs = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    headerObs.observe(header);
  }

  scrollToSection() {
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
      console.log(e.target);
      if (!id) return;
      document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleModal(e) {
    e.stopPropagation();
    overlay.classList.toggle('hidden');
    modal.classList.toggle('hidden');
  }

  sayHi() {
    console.log('Welcome back');
  }
}

const app = new App();

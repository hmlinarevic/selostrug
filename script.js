const btnNavToggle = document.querySelector('#nav-toggle');
const btnNavClose = document.querySelector('#nav-close');
const navContent = document.querySelector('.nav__menu');
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

console.log(nav);

class App {
  constructor() {
    btnNavToggle.addEventListener('click', this.toggleNavMenu);
    btnNavClose.addEventListener('click', this.closeNavMenu);
    nav.addEventListener('mouseover', this.handleHover.bind(0.5));
    nav.addEventListener('mouseout', this.handleHover.bind(1));

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

  sayHi() {
    console.log('hi there');
  }
}

new App();

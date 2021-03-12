const nav = document.querySelector('.nav');

const btnToggle = document.querySelector('#toggle-nav');
const btnClose = document.querySelector('#close-nav');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.nav__link--action');
const btnCloseModal = document.querySelector('.btn--close-modal');

export default class Nav {
  constructor() {
    nav.addEventListener('mouseover', this.handleHover.bind(0.1));
    nav.addEventListener('mouseout', this.handleHover.bind(1));
    nav.addEventListener('click', this.handleLinks);

    btnToggle.addEventListener('click', this.toggleNavMenu);
    btnClose.addEventListener('click', this.closeNavMenu);

    btnOpenModal.addEventListener('click', this.openModal);
    btnCloseModal.addEventListener('click', this.closeModal);
    overlay.addEventListener('click', this.closeModal);
  }

  // open / close nav menu

  toggleNavMenu() {
    navContent.classList.toggle('nav__menu--show');
    // prevent document scroll
    document.body.classList.add('stop-scrolling');
  }

  closeNavMenu() {
    navContent.classList.remove('nav__menu--show');
    // allow document scroll
    document.body.classList.remove('stop-scrolling');
  }

  // open / close modal

  openModal(e) {
    e.stopPropagation();
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  }

  closeModal() {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
  }

  // handling links

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

  handleLinks(e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      console.log(e.target);
      if (!id) return;
      document.querySelector(`${id}`).scrollIntoView({ behavior: 'smooth' });
    }
  }

  // intersection observer
}

const header = document.querySelector('.header');
const nav = document.querySelector('#navigation');
const navLink = document.querySelectorAll('.nav__link');
const toggleNav = document.querySelector('#toggle-nav');
const closeNav = document.querySelector('#close-nav');

function linkAction() {
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
    nav.classList.remove('show');
}

// open & close nav

toggleNav.addEventListener('click', () => {
    nav.classList.add('show');
});

closeNav.addEventListener('click', () => {
    nav.classList.remove('show');
});

navLink.forEach((link) => link.addEventListener('click', linkAction));

// minimize header

function modifyHeaderHeight() {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        header.style.height = '3rem';
    } else {
        header.style.height = 'calc(var(--header-height) + 1rem)';
    }
}

document.addEventListener('scroll', modifyHeaderHeight);

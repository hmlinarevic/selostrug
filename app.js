const nav = document.querySelector('#navigation');
const navLink = document.querySelectorAll('.nav__link');
const toggleNav = document.querySelector('#toggle-nav');
const closeNav = document.querySelector('#close-nav');

// open & close nav

toggleNav.addEventListener('click', () => {
    nav.classList.add('show');
});

closeNav.addEventListener('click', () => {
    nav.classList.remove('show');
});

// active links

function linkAction() {
    navLink.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
    nav.classList.remove('show');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));

// minimize header

const header = document.querySelector('.header');
console.log(document.body.scrollTop);

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        header.style.height = 'var(--header-height)';
    } else {
        header.style.height = '5rem';
    }
}

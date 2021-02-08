const navToggle = document.querySelector('#nav-toggle');
const navContent = document.querySelector('.nav__content');

navToggle.addEventListener('click', function () {
    console.log('Good evening, lord Vader.');
    navContent.classList.toggle('nav__content--show');
});

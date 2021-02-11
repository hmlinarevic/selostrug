const btnNavToggle = document.querySelector('#nav-toggle');
const btnNavClose = document.querySelector('#nav-close');
const navContent = document.querySelector('.nav__menu');

class App {
    constructor() {
        btnNavToggle.addEventListener('click', this.toggleNavMenu);
        btnNavClose.addEventListener('click', this.closeNavMenu);
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

    sayHi() {
        console.log('hi there');
    }
}

new App();

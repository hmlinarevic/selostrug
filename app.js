import Nav from './components/Nav.js';
import View from '/components/View.js';
import initHeaderObs from './utils/headerObs.js';

class App {
  //   path = window.location.pathname;
  //   page = this.path.split('/').pop();

  constructor() {
    this.greetDeveloper();
    this.initComponents();

    // intersection observer
    initHeaderObs();
  }

  initComponents() {
    this.nav = new Nav();
    this.view = new View();
  }

  greetDeveloper() {
    console.log('Good day to you sir, developer!');
  }
}

new App();

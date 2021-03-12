import View from '/components/View.js';
import Nav from './components/Nav.js';
import Slider from './components/Slider.js';

class App {
  path = window.location.pathname;
  page = this.path.split('/').pop();

  constructor() {
    this.greetDeveloper();
    this.initComponents();
    this.view.sayHi();
  }

  initComponents() {
    this.nav = new Nav();
    this.view = new View();
    if (this.page === 'accommodations.html') new Slider();
  }

  greetDeveloper() {
    console.log('Good day to you sir, developer!');
  }
}

new App();

const btnScroll = document.querySelector('#btn--scroll-to');
const sectionAccommodation = document.querySelector('#section--accommodation');

export default class View {
  constructor() {
    btnScroll.addEventListener('click', this.scrollToSection);
  }

  sayHi() {
    console.log("Hi, my name is View, and I'm awsome");
  }

  scrollToSection() {
    const sectionCoords = sectionAccommodation.getBoundingClientRect();
    // determine absolute position relative to document (entire page)
    // current position + current scroll
    // console.log(sectionCoords);
    // window.scrollTo({
    //   left: sectionCoords.left + window.pageXOffset,
    //   top: sectionCoords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
    sectionAccommodation.scrollIntoView({ behavior: 'smooth' });
  }
}

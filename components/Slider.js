const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length;

export default class Slider {
  constructor() {
    btnRight.addEventListener('click', this.nextSlide.bind(this));
    btnLeft.addEventListener('click', this.prevSlide.bind(this));

    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * i}%)`;
    });
  }

  goToSlide(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%`;
    });
  }

  nextSlide() {
    ++currentSlide;
    if (currentSlide === maxSlide) currentSlide = 0;
    this.goToSlide(currentSlide);
  }

  prevSlide() {
    if (currentSlide === 0) currentSlide = maxSlide;
    --currentSlide;
    this.goToSlide(currentSlide);
  }
}

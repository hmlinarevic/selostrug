export default function initHeaderObs() {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navHeight = nav.getBoundingClientRect().height;

  const stickyNav = function (entries) {
    entries.forEach((entry) => {
      // console.log(entry);
      if (!entry.isIntersecting) {
        nav.classList.add('sticky');
      } else nav.classList.remove('sticky');
    });
  };

  const obs = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });

  obs.observe(header);
}

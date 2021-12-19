// ************
// SLIDE //
// ************

const slider = function () {
  // Choose elements
  const slideEls = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".slides__btn--down");
  const prevBtn = document.querySelector(".slides__btn--up");

  // Current slide
  let curSlide = 0;
  let maxSlide = slideEls.length;

  //Function
  const goToSlide = function (slide) {
    slideEls.forEach(
      (s, i) => (s.style.transform = `translateY(${480 * (i - slide)}px)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else curSlide++;
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else curSlide--;
    goToSlide(curSlide);
  };

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  const init = function () {
    goToSlide(0);
  };
  init();
};

slider();

// ************
// OPEN ALL MENU //
// ************

const openBtn = document.querySelector(".main-nav .all-menu");
const modalNavEl = document.querySelector(".modal-navigation");
const closeBtn = document.querySelector(".top__close");

openBtn.addEventListener("click", () =>
  modalNavEl.classList.toggle("modal-navigation--open")
);

closeBtn.addEventListener("click", () =>
  modalNavEl.classList.remove("modal-navigation--open")
);

// ************
//  STICKY//
// ************

const navBoxEl = document.querySelector(".navigation");
const navEl = document.querySelector(".main-nav");
const newsEl = document.querySelector(".newlest");

function stickyFunc(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navEl.classList.add("main-nav--sticky");
    newsEl.style.display = "block";
    newsEl.style.color = "#b52759";
    modalNavEl.classList.add("modal-navigation--sticky");
  } else {
    navEl.classList.remove("main-nav--sticky");
    newsEl.style.display = "none";
    modalNavEl.classList.remove("modal-navigation--sticky");
  }
}

const options = {
  root: null,
  threshold: 1,
};

const observer = new IntersectionObserver(stickyFunc, options);
observer.observe(navBoxEl);

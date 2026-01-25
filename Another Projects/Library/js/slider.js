export function initSlider() {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const firstImg = document.querySelector(".slides img");

  let imgWidth = firstImg.offsetWidth + 20;
  const positions = [0, 1, 2, 3, 4];
  let currentIndex = 0;

  window.addEventListener("resize", () => {
    imgWidth = firstImg.offsetWidth + 20;
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => moveToSlide(index));
  });

  function moveToSlide(index) {
    slides.style.transform = `translateX(-${positions[index] * imgWidth}px)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");

    currentIndex = index;
  }

  return { moveToSlide };
}
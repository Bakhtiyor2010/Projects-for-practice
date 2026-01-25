export function initProductSlider() {
  const scrollContainer = document.querySelectorAll(".products");

  for (const item of scrollContainer) {
    item.addEventListener("wheel", (event) => {
      event.preventDefault();

      item.scrollLeft += event.deltaY;
    });
  }
}
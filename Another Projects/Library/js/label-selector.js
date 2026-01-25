export function initLabelSelector() {
  const radios = document.querySelectorAll('input[name="season"]');
  const books = document.querySelectorAll(".book");

  function filterBooks(season) {
    books.forEach((book) => {
      book.style.display = book.dataset.season === season ? "" : "none";
    });
  }

  filterBooks("winter");

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      filterBooks(radio.id);
    });
  });
}
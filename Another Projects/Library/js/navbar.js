export function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const lists = document.getElementById("list-wrapper");

  let isOpen = false;

  hamburger.addEventListener("click", (event) => {
    event.stopPropagation();
    isOpen = !isOpen;

    lists.style.display = isOpen ? 'flex' : 'none'
  });

  window.addEventListener("click", (event) => {
    if (
      isOpen &&
      !lists.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      isOpen = false;
      lists.style.display = "none";
    }
  });
}
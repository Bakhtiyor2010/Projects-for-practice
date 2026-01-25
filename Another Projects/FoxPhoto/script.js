let navbar = document.getElementById("responsive-nav");
let hamburger = document.getElementById("hamburger");
let closeBtn = document.getElementById("close");

hamburger.addEventListener("click", (event) => {
  event.stopPropagation();
  navbar.style.display = "flex";
});

closeBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  navbar.style.display = "none";
});
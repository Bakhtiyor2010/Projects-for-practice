const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const wrapper = document.getElementById("wrapper");

openBtn.addEventListener("click", () => {
  wrapper.classList.add("show");
  closeBtn.focus();
});

closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("show");
  openBtn.style.display = "block";
});

wrapper.addEventListener("click", (e) => {
  if (e.target === wrapper) {
    wrapper.classList.remove("show");
    openBtn.style.display = "block";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    wrapper.classList.remove("show");
    openBtn.style.display = "block";
  }
});

const openBtn1 = document.getElementById("open1");
const closeCard = document.getElementById("close-card");
const wrapperCard = document.getElementById("wrapper-card");

openBtn1.addEventListener("click", () => {
  wrapperCard.classList.add("show");
  closeCard.focus();
});

closeCard.addEventListener("click", () => {
  wrapperCard.classList.remove("show");
  openBtn1.style.display = "flex";
});

wrapperCard.addEventListener("click", (e) => {
  if (e.target === wrapperCard) {
    wrapperCard.classList.remove("show");
    openBtn1.style.display = "flex";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    wrapperCard.classList.remove("show");
    openBtn1.style.display = "flex";
  }
});
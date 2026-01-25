const productImg = document.getElementById("product-img");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    productImg.src = `images/image${index + 1}.png`;

    btns.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");
  });
});
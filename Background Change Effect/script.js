let imgBox = document.querySelector(".img-box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("original-img");
let line = document.getElementById("line");

originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e) {
  let leftSpace = imgBox.getBoundingClientRect().left;
  let boxWidth = e.clientX - leftSpace;

  if (boxWidth < 0) boxWidth = 0;
  if (boxWidth > imgBox.offsetWidth) boxWidth = imgBox.offsetWidth;

  imgWrap.style.width = boxWidth + "px";
  line.style.left = boxWidth + "px";
};
// ---------------- Projects Section ----------------
let video1 = document.getElementById("projectVideo1");
let video2 = document.getElementById("projectVideo2");
let video3 = document.getElementById("projectVideo3");
let hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });

  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// ---------------- Sidebar Section ----------------
const sideBar = document.querySelector(".sidebar");
const menu = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});
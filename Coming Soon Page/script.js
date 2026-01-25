let countDownDate = new Date("March 23, 2026 16:00:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 9 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 9 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 9 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 9 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
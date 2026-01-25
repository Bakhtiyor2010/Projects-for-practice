const scriptURL = "https://script.google.com/macros/s/AKfycbw9t2NHlHFmu52D_jbRatPWXY41wHSctpgV8BEJz2M_GIlah-UnxumqsHxvog6ALhAv/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
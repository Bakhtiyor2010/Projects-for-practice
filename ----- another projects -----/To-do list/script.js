// NIGHT-LIGHT BUTTON
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

moon.addEventListener("click", () => {
  document.body.style.background = "lightgray";
  moon.style.display = "none";
  sun.style.display = "block";
});

sun.addEventListener("click", () => {
  document.body.style.background = "white";
  sun.style.display = "none";
  moon.style.display = "block";
});

// GET INFORMATION
function showInfo(event) {
  event.preventDefault();

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  if (editingCard) {
    let p = editingCard.querySelectorAll("p");

    p[0].textContent = input1;
    p[1].textContent = input2;

    editingCard = null;
  } else {
    show(input1, input2);
  }

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
}


function show(text1, text2) {
  let card = `
        <div class="show">
            <p>${text1}</p>
            <p>${text2}</p>

            <div class="btns">
                <button onclick="checkInfo(this)">Checked</button>
                <button onclick="deleteInfo(this)">Delete</button>
                <button onclick="editInfo(this)">Edit</button>
            </div>
        </div>
    `;

  document.getElementById("show").innerHTML += card;
}

function deleteInfo(btn) {
  btn.parentElement.parentElement.remove();
}

function checkInfo(btn) {
  let card = btn.closest(".show");

  card.classList.toggle("checked");
}

let editingCard = null;

function editInfo(btn) {
  let card = btn.closest(".show");
  let p = card.querySelectorAll("p");
  
  document.getElementById("input1").value = p[0].textContent;
  document.getElementById("input2").value = p[1].textContent;

  editingCard = card;
}
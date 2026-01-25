let saveData = localStorage.getItem("data");
let data = saveData ? JSON.parse(saveData) : [];

function submitOrder(e) {
  e.preventDefault();

  let food = e.target[0].value;
  let drink = e.target[1].value;
  let price = e.target[2].value;

  data.unshift({ food, drink, price, checked: false });

  localStorage.setItem("data", JSON.stringify(data));
  showCard();
  calcAndShow();
  e.target.reset();
}

function showCard() {
  let cards = "";

  data.forEach((item, index) => {
    cards += `
            <div class="card-item" style="background-color: ${
              item.checked ? "#CC7C3E" : "sandybrown"
            };">
                <h1>${item.food}</h1>
                <h1>${item.drink}</h1>
                <h2>$${item.price}</h2>
                <div class="btn-wrapper">
                    <button onclick="deleteItem(${index})">Delete</button>
                    <button onclick="selectItem(${index})">Select</button>
                </div>
            </div>
        `;
  });

  document.getElementById("card").innerHTML = cards;
}

function deleteItem(cardElem) {
  data.splice(cardElem, 1);
  localStorage.setItem("data", JSON.stringify(data));
  showCard();
  calcAndShow();
}

function selectItem(itemInd) {
  data[itemInd].checked = !data[itemInd].checked;
  localStorage.setItem("data", JSON.stringify(data));
  showCard();
  calcAndShow();
}

function calcAndShow() {
  let orderList = "";
  let total = 0;

  data.forEach((item) => {
    if (item.checked) {
      orderList += `${item.food}, ${item.drink}` + "; ";
      total += Number(item.price);
    }
  });

  let selectitem = `
        <h1>Your order: <i><b>${
          orderList || "Nothing selected yet."
        }</b></i></h1>
        <h2>Bill: <i><b>$${total}</b></i></h2>
    `;

  document.getElementById("selectitems").innerHTML = selectitem;
}

showCard();
calcAndShow();
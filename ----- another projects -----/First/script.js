const showCount = document.getElementById("count-el");
const showSavedCount = document.getElementById("save-el");
const p = document.getElementById("total");

let count = 0;
let savedCounts = [];

function increment() {
  count += 1;
  showCount.textContent = count;
}

function save() {
  if (count === 0) return;

  savedCounts.push(count);
  showSavedCount.textContent = "Previous entries: " + savedCounts.join(", ");

  count = 0;
  showCount.textContent = count;

  let total = savedCounts.reduce((a, b) => a + b, 0);
  p.textContent = "Total: " + total;
}
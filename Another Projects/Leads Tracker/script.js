const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

inputBtn.addEventListener("click", function () {
  if (inputEl.value === "") return;
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  inputEl.value = "";
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = "";
});

function render(leads) {
  ulEl.innerHTML = "";
  for (let i = 0; i < leads.length; i++) {
    ulEl.innerHTML += `
            <li>
                <a href="${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>
        `;
  }
}

render(myLeads);
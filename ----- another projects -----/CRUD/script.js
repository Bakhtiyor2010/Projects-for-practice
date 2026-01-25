let newMemberAddBtn = document.querySelector(".addMemeberBtn"),
  darkBg = document.querySelector(".dark_bg"),
  popupForm = document.querySelector(".popup"),
  crossBtn = document.querySelector(".closeBtn"),
  submitBtn = document.querySelector(".submitBtn"),
  modalTitle = document.querySelector(".modalTitle"),
  popupFooter = document.querySelector(".popupFooter"),
  imgInput = document.querySelector(".img"),
  imgHolder = document.querySelector(".imgholder"),
  form = document.querySelector("form"),
  formInputFields = document.querySelector("form input"),
  uploadimg = document.querySelector("#uploadimg"),
  fName = document.getElementById("fName"),
  lName = document.getElementById("lName"),
  age = document.getElementById("age"),
  city = document.getElementById("city"),
  position = document.getElementById("position"),
  salary = document.getElementById("salary"),
  sDate = document.getElementById("sDate"),
  email = document.getElementById("email"),
  phone = document.getElementById("phone"),
  entries = document.querySelector(".showEntries"),
  tabSize = document.getElementById("table_size"),
  userInfo = document.querySelector(".userInfo"),
  table = document.querySelector("table"),
  filterData = document.getElementById("search");

let originalData = localStorage.getItem("userProfile")
  ? JSON.parse(localStorage.getItem("userProfile"))
  : [];

let getData = [...originalData];
let isEdit = false,
  editId;
let arrayLength = 0;
let tableSize = 10;
let startIndex = 1;
let endIndex = 0;
let currentIndex = 1;
let maxIndex = 0;

showInfo();

newMemberAddBtn.addEventListener("click", () => {
  isEdit = false;
  submitBtn.innerHTML = "Submit";
  modalTitle.innerHTML = "Fill the Form";
  popupFooter.style.display = "block";
  imgInput.src = "images/profile.webp";

  darkBg.classList.add("active");
  popupForm.classList.add("active");
});

crossBtn.addEventListener("click", () => {
  darkBg.classList.remove("active");
  popupForm.classList.remove("active");
  form.reset();
});

uploadimg.onchange = function () {
  if (uploadimg.files[0].size < 1000000) {
    let fileReader = new FileReader();

    fileReader.onload = function (e) {
      let imgUrl = e.target.result;
      imgInput.src = imgUrl;
    };

    fileReader.readAsDataURL(uploadimg.files[0]);
  } else {
    alert("This file is too large!");
  }
};

function preLoadCalculations() {
  array = getData;
  arrayLength = array.length;
  maxIndex = arrayLength / tableSize;

  if (arrayLength % tableSize > 0) {
    maxIndex++;
  }
}

function displayIndexBtn() {
  preLoadCalculations();

  const pagination = document.querySelector(".pagination");

  pagination.innerHTML =
    '<button onclick="prev()" class="prev">Previous</button>';

  for (let i = 1; i <= maxIndex; i++) {
    pagination.innerHTML +=
      "<button onclick=paginationBtn(" +
      i +
      ') index="' +
      i +
      '">' +
      i +
      "</button>";
  }

  pagination.innerHTML += '<button onclick="next()" class="next">Next</button>';

  highlightIndexBtn();
}

function highlightIndexBtn() {
  startIndex = (currentIndex - 1) * tableSize + 1;
  endIndex = startIndex + tableSize - 1;

  if (endIndex > arrayLength) {
    endIndex = arrayLength;
  }

  if (maxIndex >= 2) {
    let nextBtn = document.querySelector(".next");
    nextBtn.classList.add("act");
  }

  entries.textContent = `Showing ${startIndex} to ${endIndex} of ${arrayLength}`;

  let paginationBtns = document.querySelectorAll(".pagination button");

  paginationBtns.forEach((btn) => {
    btn.classList.remove("active");

    if (btn.getAttribute("index") === currentIndex.toString()) {
      btn.classList.add("active");
    }
  });

  showInfo();
}

function showInfo() {
  document
    .querySelectorAll(".employeeDetails")
    .forEach((info) => info.remove());
  let tab_start = startIndex - 1;
  let tab_end = endIndex;

  if (getData.length > 0) {
    for (let i = tab_start; i < tab_end; i++) {
      let staff = getData[i];

      if (staff) {
        let createElement = `
                <tr class="employeeDetails">
                    <td>${i + 1}</td>
                    <td><img src="${staff.picture}" width="40" height="40"></td>
                    <td>${staff.fName + " " + staff.lName}</td>
                    <td>${staff.ageVal}</td>
                    <td>${staff.cityVal}</td>
                    <td>${staff.positionVal}</td>
                    <td>${staff.salaryVal}</td>
                    <td>${staff.sDateVal}</td>
                    <td>${staff.emailVal}</td>
                    <td>${staff.phoneVal}</td>
                    <td>
                        <button onclick="readInfo(
                            '${staff.picture}',
                            '${staff.fName}',
                            '${staff.lName}',
                            '${staff.ageVal}',
                            '${staff.cityVal}',
                            '${staff.positionVal}',
                            '${staff.salaryVal}',
                            '${staff.sDateVal}',
                            '${staff.emailVal}',
                            '${staff.phoneVal}'
                        )"><i class="fa-regular fa-eye"></i></button>

                        <button onclick="editInfo('${i}', '${staff.picture}',
                            '${staff.fName}',
                            '${staff.lName}',
                            '${staff.ageVal}',
                            '${staff.cityVal}',
                            '${staff.positionVal}',
                            '${staff.salaryVal}',
                            '${staff.sDateVal}',
                            '${staff.emailVal}',
                            '${staff.phoneVal}'
                        )"><i class="fa-regular fa-pen-to-square"></i></button>

                        <button onclick="deleteInfo('${i}')"><i class="fa-regular fa-trash-can"></i></button>
                    </td>
                </tr>
                `;

        userInfo.innerHTML += createElement;
        table.style.minWidth = "1400px";
      }
    }
  } else {
    userInfo.innerHTML = `
            <tr class="employeeDetails">
                <td class="empty" colspan="11">No data available in table</td>
            </tr>
        `;
    table.style.minWidth = "1400px";
  }
}

showInfo();

function readInfo(
  pic,
  fname,
  lname,
  Age,
  City,
  Position,
  Salary,
  SDate,
  Email,
  Phone
) {
  imgInput.src = pic;
  fName.value = fname;
  lName.value = lname;
  age.value = Age;
  city.value = City;
  position.value = Position;
  salary.value = Salary;
  sDate.value = SDate;
  email.value = Email;
  phone.value = Phone;

  darkBg.classList.add("active");
  popupForm.classList.add("active");
  popupFooter.style.display = "none";
  modalTitle.innerHTML = "Profile";
  formInputFields.forEach((input) => {
    input.disabled = true;
  });

  imgHolder.style.pointerEvents = "none";
}

function editInfo(
  id,
  pic,
  fname,
  lname,
  Age,
  City,
  Position,
  Salary,
  SDate,
  Email,
  Phone
) {
  isEdit = true;
  editId = id;

  const originalIndex = originalData.findIndex((item) => item.id === id);

  originalData[originalIndex] = {
    id: id,
    picture: pic,
    fName: fname,
    lName: lname,
    ageVal: Age,
    cityVal: City,
    positionVal: Position,
    salaryVal: Salary,
    sDateVal: SDate,
    emailVal: Email,
    phoneVal: Phone,
  };

  imgInput.src = pic;
  fName.value = fname;
  lName.value = lname;
  age.value = Age;
  city.value = City;
  position.value = Position;
  salary.value = Salary;
  sDate.value = SDate;
  email.value = Email;
  phone.value = Phone;

  darkBg.classList.add("active");
  popupForm.classList.add("active");
  popupFooter.style.display = "block";
  modalTitle.innerHTML = "Update the Form";
  submitBtn.innerHTML = "Update";
  formInputFields.forEach((input) => {
    input.disabled = false;
  });

  imgHolder.style.pointerEvents = "auto";
}

function deleteInfo(index) {
  if (confirm("Are you sure to delete?")) {
    originalData.splice(index, 1);
    localStorage.setItem("userProfile", JSON.stringify(originalData));

    getData = [...originalData];

    preLoadCalculations();

    if (getData.length === 0) {
      currentIndex = 1;
      startIndex = 1;
      endIndex = 0;
    } else if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    showInfo();
    highlightIndexBtn();
    displayIndexBtn();

    let prevBtn = document.querySelector(".prev");
    let nextBtn = document.querySelector(".next");

    if (Math.floor(maxIndex) > currentIndex) {
      nextBtn.classList.add("add");
    } else {
      nextBtn.classList.remove("add");
    }

    if (currentIndex > 1) {
      prevBtn.classList.add("act");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const information = {
    id: Date.now(),
    picture: imgInput.src == undefined ? "images/profile.webp" : imgInput.src,
    fName: fName.value,
    lName: lName.value,
    ageVal: age.value,
    cityVal: city.value,
    positionVal: position.value,
    salaryVal: salary.value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
    sDateVal: sDate.value,
    emailVal: email.value,
    phoneVal: phone.value,
  };

  if (!isEdit) {
    originalData.unshift(information);
  } else {
    originalData[editId] = information;
  }

  getData = [...originalData];
  localStorage.setItem("userProfile", JSON.stringify(originalData));

  submitBtn.innerHTML = "Submit";
  modalTitle.innerHTML = "Fill the Form";

  darkBg.classList.remove("active");
  popupForm.classList.remove("active");
  form.reset();

  highlightIndexBtn();
  displayIndexBtn();
  showInfo();

  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");

  if (Math.floor(maxIndex) > currentIndex) {
    nextBtn.classList.add("act");
  } else {
    nextBtn.classList.remove("act");
  }

  if (currentIndex > 1) {
    prevBtn.classList.add("act");
  }
});

function next() {
  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");

  if (currentIndex < maxIndex) {
    currentIndex++;
    prevBtn.classList.add("act");

    highlightIndexBtn();
  }

  if (currentIndex > maxIndex - 1) {
    nextBtn.classList.remove("act");
  }
}

function prev() {
  let prevBtn = document.querySelector(".prev");

  if (currentIndex > 1) {
    currentIndex--;
    prevBtn.classList.add("act");
    highlightIndexBtn();
  }

  if (currentIndex < 2) {
    prevBtn.classList.remove("act");
  }
}

function paginationBtn(i) {
  currentIndex = i;

  let prevBtn = document.querySelector(".prev");
  let nextBtn = document.querySelector(".next");

  highlightIndexBtn();

  if (currentIndex > maxIndex - 1) {
    nextBtn.classList.remove("act");
  } else {
    nextBtn.classList.add("act");
  }

  if (currentIndex > 1) {
    prevBtn.classList.add("act");
  }

  if (currentIndex < 2) {
    prevBtn.classList.remove("act");
  }
}

tabSize.addEventListener("change", () => {
  let tableSizeSelect = document.getElementById("table_size");

  tableSizeSelect.addEventListener("change", () => {
    tableSize = parseInt(tableSizeSelect.value);
    currentIndex = 1;
    startIndex = 1;

    displayIndexBtn();
  });
});

filterData.addEventListener("input", () => {
  const searchTerm = filterData.value.toLowerCase().trim();

  if (searchTerm !== "") {
    const filterData = originalData.filter((item) => {
      const fullName = (item.fName + " " + item.lName).toLowerCase();
      const city = item.cityVal.toLowerCase();
      const position = item.positionVal.toLowerCase();

      return (
        fullName.includes(searchTerm) ||
        city.includes(searchTerm) ||
        position.includes(searchTerm)
      );
    });

    getData = filterData;
  } else {
    getData = JSON.parse(localStorage.getItem("userProfile")) || [];
  }

  currentIndex = 1;
  startIndex = 1;
  displayIndexBtn();
});

displayIndexBtn();
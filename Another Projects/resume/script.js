function submitForm(event) {
  event.preventDefault();

  const form = event.target;

  const data = {
    firstName: form["first-name"].value,
    lastName: form["last-name"].value,
    address: form["address"].value,
    phone: form["phone"].value,
    email: form["email"].value,
    skills: form["skills"].value,
    languages: form["languages"].value,
    hobbies: form["hobbies"].value,
    education: form["education"].value,
    workExperience: form["work-experience"].value,
  };

  showData(data);
}

function showData(info) {
  let resumePage = document.getElementById("resume-page");

  resumePage.innerHTML = `
    <label for="first-name">
            First name:
            <span>${info.firstName === '' ? '<b>No Information</b>' : info.firstName}</span>
        </label>

        <label for="last-name">
            Last name:
            <span>${info.lastName === '' ? '<b>No Information</b>' : info.lastName}</span>
        </label>

        <label for="address">
            Address:
            <span>${info.address === '' ? '<b>No Information</b>' : info.address}</span>
        </label>

        <label for="phone">
            Phone:
            <span>${info.phone === '' ? '<b>No Information</b>' : info.phone}</span>
        </label>

        <label for="email">
            Email:
            <span>${info.email === '' ? '<b>No Information</b>' : info.email}</span>
        </label>

        <label for="skills">
            Skills:
            <span>${info.skills === '' ? '<b>No Information</b>' : info.skills}</span>
        </label>

        <label for="languages">
            Languages:
            <span>${info.languages === '' ? '<b>No Information</b>' : info.languages}</span>
        </label>

        <label for="hobbies">
            Hobbies:
            <span>${info.hobbies === '' ? '<b>No Information</b>' : info.hobbies}</span>
        </label>

        <label for="education">
            Education:
            <span>${info.education === '' ? '<b>No Information</b>' : info.education}</span>
        </label>

        <label for="work-experience">
            Work Experience:
            <span>${info.workExperience === '' ? '<b>No Information</b>' : info.workExperience}</span>
        </label>
    `;
}
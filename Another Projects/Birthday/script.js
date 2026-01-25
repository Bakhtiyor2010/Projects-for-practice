// ============================ Header ============================
const header = {
  h1: "Today is Nick's birthday 🎉",
  source: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
  idCss: "bff-img",
  alt: "profile",
  h2: "22 years old",
  h4: "01.02.2022",
  classCss: "date",
};
const { h1, source, idCss, alt, h2, h4, classCss } = header;
const container = document.createElement("header");

container.innerHTML = `
        <h1>${h1}</h1>
        <img src="${source}" id="${idCss}" alt="${alt}">
        <h2 class="${classCss}">${h2}</h2>
        <h4 class="${classCss}">${h4}</h4>
    `;

document.body.append(container);

// ============================ Gift Sections ============================
const sections = [
  {
    h2: "Here's how happy I am for you today 🥳",
    h3: "(Click or hover over the gift)",
    idCss: "happy",
  },
  {
    h2: "How people react when you enter the room 😍",
    idCss: "hot",
    h3: null,
  },
  {
    h2: "If I had to describe you with ONE word 👇",
    idCss: "genius",
    h3: null,
  },
  {
    h2: "The only person as badass as you 💪",
    idCss: "badass",
    h3: null,
  },
  {
    h2: "This one's for you, my friend 🥂",
    idCss: "cheers",
    h3: null,
  },
];

sections.forEach(({ h2, h3, idCss }) => {
  let container = document.createElement("section");
  container.className = "gift-section";

  container.innerHTML = `
            <h2>${h2}</h2>
            <h3>${h3 === null ? "" : h3}</h3>
            <div class="gift-cover" id="${idCss}"></div>
        `;

  document.body.append(container);
});
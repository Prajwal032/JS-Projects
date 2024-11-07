const container = document.querySelector(".container");
const careers = ["Student", "Developer", "Eater", "Sleeper"];

let careerIdx = 0;
let characterIdx = 0;

function updateText() {
  container.innerHTML = `<h1>I am a ${careers[careerIdx].slice(0,characterIdx)}</h1>`;

  characterIdx++;

  if (characterIdx > careers[careerIdx].length) {
    careerIdx++;
    characterIdx = 0;

    if (careerIdx === careers.length) {
      careerIdx = 0;
    }
  }

  setTimeout(updateText, 200);
}

updateText();

const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
    if (window.scrollY > (bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50)) {
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }
});

const container = document.querySelector(".top-container");
const word = ["Website"]
let wordIdx = 0;
let characterIdx = 0;

function updateText() {
  container.innerHTML = `<h1>Welcome to our ${word[wordIdx].slice(0,characterIdx)}</h1>`;

  characterIdx++;

  if (characterIdx > word[wordIdx].length) {
    wordIdx++;
    characterIdx = 0;

    if (wordIdx === word.length) {
      wordIdx = 0;
    }
  }

  setTimeout(updateText, 200);
}

updateText();

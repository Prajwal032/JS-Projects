const words = ["Javascript", "Program", "Mouse", "Keyboard", "HTML"];
const hints = [
  "A popular programming language for web development.",
  "A set of instructions for a computer to perform tasks.",
  "A device used to control the cursor on a computer screen.",
  "An input device consisting of keys for typing.",
  "A markup language used for creating web pages.",
];

let selectedWord;
let selectedHint;

const display = document.querySelector("input");
const lengthDisplay = document.querySelector(".length");
const hintDisplay = document.querySelector(".hint");
const resetBtn = document.getElementById("reset");
const guessBtn = document.getElementById("guess");
const resultDisplay = document.querySelector(".result"); // Display results

function selectRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex];
  selectedHint = hints[randomIndex];


  hintDisplay.textContent = `Hint: ${selectedHint}`;
  lengthDisplay.textContent = `Length: ${selectedWord.length}`;
}

selectRandomWord();

function resetGame() {
  display.value = "";
  resultDisplay.textContent = "";
  selectRandomWord();
}

function guess(e) {
  e.preventDefault();
  const guessedWord = display.value;
  console.log("Guessed word:", guessedWord);

  if (guessedWord.toLowerCase() === selectedWord.toLowerCase()) {
    resultDisplay.textContent = "Correct!";
    display.value = "";
  } else {
    resultDisplay.textContent = "Try again!";
  }

  lengthDisplay.textContent = `Length: ${guessedWord.length}`;
}

resetBtn.addEventListener("click", resetGame);
guessBtn.addEventListener("click", guess);

display.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    guess(e); 
  }
});

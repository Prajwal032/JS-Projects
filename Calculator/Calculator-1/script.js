const display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0"; // Default to "0" if empty
}

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  if (
    display.innerText !== "" &&
    !/[+\-*/]/.test(display.innerText.slice(-1))
  ) {
    display.innerText += operator;
  }
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
  console.log("hi");
}

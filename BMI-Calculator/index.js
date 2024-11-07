const buttonEl = document.getElementById("btn");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const condition = document.getElementById("weight-condition");
const result = document.getElementById("bmi-result");
buttonEl.addEventListener("click", calculateBMI );



function calculateBMI() {
  const height = parseFloat(heightEl.value) / 100;
  const weight = parseFloat(weightEl.value);
  const BMI = weight / (height * height);
  if (BMI < 18.5) {
    condition.innerText = "Underweight";
  } else if (BMI < 24.9 && BMI > 18.5) {
    condition.innerText = "Normalweight";
  } else if (BMI < 29.9 && BMI > 25) {
    condition.innerText = "Overweight";
  } else {
    condition.innerText = "Obesity";
  }
  console.log(BMI, result)
  result.value = BMI.toFixed(2)
}


calculateBMI()

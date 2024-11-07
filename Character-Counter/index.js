const textInput = document.getElementById("text-input");
const charWritten = document.getElementById("char-written");
const charLeft = document.getElementById("char-left");
const maxChars = 100;

textInput.addEventListener("keyup", () => {
    updateCounter();
});
function updateCounter() {
    const currentLength = textInput.value.length;
    charWritten.textContent = `Characters Written: ${currentLength}`;
    charLeft.textContent = `Characters Left: ${maxChars - currentLength}`;

    if (currentLength >= maxChars) {
        textInput.disabled = true;
        charLeft.classList.add("warning");
    } else {
        charLeft.classList.remove("warning");
        textInput.disabled = false;
    }
}

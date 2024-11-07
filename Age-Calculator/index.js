const button = document.getElementById("btn")
button.addEventListener("click",calculateAge)

function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const result = document.getElementById('result');

    if (birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        result.textContent = `You are ${age} years old.`;
    } else {
        result.textContent = "Please enter your birthdate.";
    }
}

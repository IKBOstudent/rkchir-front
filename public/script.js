const nameInput = document.getElementById("signup-text");
const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");

const submitBtn = document.getElementById("signup-submit");

function submitHandler() {
    console.log("submit");
    console.log(nameInput.value, emailInput.value, passwordInput.value);
}

submitBtn.addEventListener("click", submitHandler);

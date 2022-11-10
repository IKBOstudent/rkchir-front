const nameInput = document.getElementById("signup-text");
const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");
const rememberInput = document.getElementById("signup-checkbox");

const submitBtn = document.getElementById("signup-submit");

// if (!window.location.href.includes("register")) {
//     const ans = prompt("Want to sign in?");

//     if (ans && ans.toLowerCase().includes("yes")) {
//         window.location.href += "register";
//     }
// }

function submitHandler(event) {
    event.preventDefault();

    console.log("submit");
    const payload = {
        name: nameInput.value.trim(),
        email: emailInput.value,
        password: passwordInput.value,
        remember: rememberInput.checked,
    };

    const textDiv = nameInput.parentElement;
    const emailDiv = emailInput.parentElement;
    const passwordDiv = passwordInput.parentElement;

    let good = true;
    if (payload.name.length < 4) {
        textDiv.className = "signup-form-input2";
        textDiv.lastChild.textContent = "Too short name!";
        good = false;
    } else {
        textDiv.className = "signup-form-input";
        textDiv.lastChild.textContent = "Name";
    }

    if (!payload.email.match(/\w+@\w+\.\w+/)) {
        emailDiv.className = "signup-form-input2";
        emailDiv.lastChild.textContent = "Invalid email!";
        good = false;
    } else {
        emailDiv.className = "signup-form-input";
        emailDiv.lastChild.textContent = "Email";
    }

    if (payload.password.length < 6) {
        passwordDiv.className = "signup-form-input2";
        passwordDiv.lastChild.textContent = "Too short password!";
        good = false;
    } else {
        passwordDiv.className = "signup-form-input";
        passwordDiv.lastChild.textContent = "Password";
    }

    good && console.log(payload);
}

submitBtn?.addEventListener("click", submitHandler);

let clickedCount = 0;

function addItem(event) {
    const color1 = "rgb(11, 9, 28)";
    const color2 = "rgb(82, 49, 255)";

    const btn = event.target;
    const ul = btn.parentElement.parentElement;

    if (btn.style.backgroundColor === color1) {
        if (clickedCount === 1) {
            alert("you can't select more than 1 Item!");
            return;
        }

        clickedCount++;
        btn.style.backgroundColor = color2;

        for (let li of ul.children) {
            li.style.transform = "none";
            li.style.opacity = 1;
        }
    } else if (btn.style.backgroundColor === color2) {
        clickedCount--;
        btn.style.backgroundColor = color1;

        for (let li of ul.children) {
            li.style.transform = "";
            li.style.opacity = "";
        }
    }
}

const buttons = document.querySelectorAll(`.button-add-item`);
for (let btn of buttons) {
    btn.addEventListener("click", addItem);
}

const searchIcon = document.getElementById("search-icon");

function clearIcon(icon) {
    setTimeout(() => {
        searchIcon.parentElement.removeChild(icon);
    }, 1000);
}

function getPos(event) {
    const newIcon = searchIcon.firstChild.cloneNode(true);
    newIcon.id += "0";
    newIcon.classList.add("fade-out");

    newIcon.style.top = event.clientY + "px";
    newIcon.style.left = event.clientX + "px";

    searchIcon.parentElement.appendChild(newIcon);
    clearIcon(newIcon);
}

searchIcon.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", getPos);
});
document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", getPos);
});

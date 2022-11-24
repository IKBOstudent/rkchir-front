const notificationBox = document.querySelector(".notification-box");
// let prevNode = notificationBox;
const notificationRoot = notificationBox.parentElement;
notificationRoot.removeChild(notificationBox);

function clearNode(element) {
    setTimeout(() => {
        element.parentElement.removeChild(element);
    }, 2000);
}

const notificatonCount = document.getElementById("notification-count");

let count = 0;
let timer;

function start() {
    console.log("timer started");
    timer = setInterval(() => {
        count++;
        notificatonCount.textContent = "Notifications (" + count + ")";
        const newNode = notificationBox.cloneNode(true);

        newNode.classList.remove("hidden");
        newNode.classList.add("animation-toggle");
        notificationRoot.appendChild(newNode);

        // clearNode(newNode);
    }, 3000);
}

// start();

notificationRoot.addEventListener("click", event => {
    const action = event.target.dataset.action;
    if (action === "close") {
        notificationRoot.removeChild(event.target.parentElement);
    }
});

const notificationButton = document.getElementById("notification-button");

notificationButton.addEventListener("click", () => {
    console.log("paused for 10 seconds");
    clearInterval(timer);
    setTimeout(() => {
        start();
    }, 10000);
});

const picture = document.createElement("div");
picture.innerHTML = `<img src="/static/media/poster3.3e9409764881b0c7675e.jpg">`;
picture.style.position = "fixed";
picture.firstChild.style.verticalAlign = "top";
picture.style.top = `calc(50% - ${picture.firstChild.naturalHeight / 2}px)`;
picture.style.left = `calc(50% - ${picture.firstChild.naturalWidth / 2}px)`;
picture.style.boxShadow = "0 0 20px 10px #000000aa";

// document.body.appendChild(picture);

// picture.addEventListener("click", event => {
//     console.log(event.clientX, event.clientY);
// });

const ul = document.getElementById("id_for_script");

while (true) {
    let ans = prompt("Enter text for li");
    if (!ans) break;

    const li = document.createElement("li");
    li.textContent = ans;

    ul.appendChild(li);
}

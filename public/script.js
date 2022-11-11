let clickedCount = 0;

function addItem(event) {
    const color1 = 'rgb(11, 9, 28)';
    const color2 = 'rgb(82, 49, 255)';

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
            li.style.transform = 'none';
            li.style.opacity = 1;
        }
    } else if (btn.style.backgroundColor === color2) {
        clickedCount--;
        btn.style.backgroundColor = color1;

        for (let li of ul.children) {
            li.style.transform = '';
            li.style.opacity = '';
        }
    }
}

const buttons = document.querySelectorAll(`.button-add-item`);
for (let btn of buttons) {
    btn.addEventListener('click', addItem);
}

const searchIcon = document.getElementById('search-icon');

function clearIcon(icon) {
    setTimeout(() => {
        searchIcon.parentElement.removeChild(icon);
    }, 1000);
}

function getPos(event) {
    const newIcon = searchIcon.firstChild.cloneNode(true);
    newIcon.id += '0';
    newIcon.classList.add('fade-out');

    newIcon.style.top = event.clientY + 'px';
    newIcon.style.left = event.clientX + 'px';

    searchIcon.parentElement.appendChild(newIcon);
    clearIcon(newIcon);
}

if (searchIcon) {
    searchIcon.addEventListener('mousedown', () => {
        document.addEventListener('mousemove', getPos);
    });
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', getPos);
    });
}

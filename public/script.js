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

const items = [
    { id: '0', value: 'Name 1', count: 3 },
    { id: '1', value: 'Name 2', count: 5 },
    { id: '2', value: 'Name 3', count: 1 },
    { id: '3', value: 'Name 4', count: 2 },
];

const cart = document.querySelector('.cart-items');

if (cart) {
    const cartItem = document.querySelector('.cart-items__item');
    if (items.length === 0) {
        cart.textContent = 'Empty';
    } else {
        for (const item of items) {
            const new_item = cartItem.cloneNode(true);
            new_item.id = item.id;
            const value = new_item.lastChild.firstChild.firstChild.firstChild;
            const right = new_item.lastChild.lastChild;

            value.textContent = item.value;
            right.childNodes[1].textContent = item.count;

            if (item.count === 1) {
                right.childNodes[0].classList.add('button-disabled');
            }

            new_item.style.display = 'flex';
            if (item.count > 0) cart.appendChild(new_item);
        }
    }
}

const all_items = document.querySelectorAll('.cart-items__item');

function remove_item(item) {
    item.style.pointerEvents = 'none';
    item.style.opacity = 0;
    setTimeout(() => {
        cart.removeChild(item);
    }, 300);

    items.forEach((el, index, array) => {
        if (el.id === item.id) array.splice(index, 1);
    });
}

function handleClick(event, par, id) {
    const count = event.target.parentNode.childNodes[1];
    if (par === 0) {
        count.textContent = Number(count.textContent) - 1;
    } else {
        count.textContent = Number(count.textContent) + 1;
    }

    if (count.textContent == 1) {
        event.target.parentNode.childNodes[0].classList.add('button-disabled');
    } else {
        event.target.parentNode.childNodes[0].classList.remove('button-disabled');
    }

    items.forEach((el) => {
        el.id === id && (el.count = Number(count.textContent));
    });
}

for (const item of all_items) {
    const remove = item.lastChild.firstChild.lastChild.lastChild;
    const buttons = item.querySelectorAll('.button-shop');

    remove.addEventListener('click', () => remove_item(item));

    buttons[0].addEventListener('click', (event) => handleClick(event, 0, item.id));
    buttons[1].addEventListener('click', (event) => handleClick(event, 1, item.id));
}

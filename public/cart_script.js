const items = [
    { value: 'Name 1', count: 3 },
    { value: 'Name 2', count: 5 },
    { value: 'Name 3', count: 1 },
    { value: 'Name 4', count: 2 },
];

const cart = document.querySelector('.cart-items');

if (cart) {
    const cartItem = document.querySelector('.cart-items__item');
    if (items.length === 0) {
        cart.textContent = 'Empty';
    } else {
        for (const item of items) {
            const new_item = cartItem.cloneNode(true);
            new_item.firstChild.textContent = item.value;
            new_item.lastChild.childNodes[1].textContent = item.count;
            new_item.style.display = 'flex';
            if (item.count > 0) cart.appendChild(new_item);
        }
    }
}

const all_items = document.querySelectorAll('.cart-items__item');

function handleClick(event, par) {
    const count = event.target.parentNode.childNodes[1];
    if (par === 0) {
        console.log('minus');
        if (count.textContent - 1 <= 0) {
            cart.removeChild(event.target.parentNode.parentNode);
            return;
        }

        count.textContent = Number(count.textContent) - 1;
    } else if (par === 1) {
        console.log('plus');
        count.textContent = Number(count.textContent) + 1;
    } else if (par === 2) {
        console.log('remove');
        cart.removeChild(event.target.parentNode.parentNode);
    }
}

for (const item of all_items) {
    item.lastChild.childNodes[0].addEventListener('click', (event) => handleClick(event, 0));
    item.lastChild.childNodes[2].addEventListener('click', (event) => handleClick(event, 1));
    item.lastChild.childNodes[3].addEventListener('click', (event) => handleClick(event, 2));
}

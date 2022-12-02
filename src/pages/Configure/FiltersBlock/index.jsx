import React from 'react';
import Filter from './Filter';

import './filtersblock.scss';

const ArrowIcon = () => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2.2">
            <path d="M18 9L12 15L6 9" />
        </svg>
    );
};

function onMoveSlider(event) {
    const slider = document.getElementById('slider');
    let lineBox = slider.parentElement.getBoundingClientRect();

    let newLeft = Number(event.pageX) - Number(lineBox.left);
    const maxLeft = lineBox.width - slider.offsetWidth;

    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > maxLeft) {
        newLeft = maxLeft;
    }

    slider.style.left = newLeft + 'px';
}

function stopSliding() {
    document.removeEventListener('mousemove', onMoveSlider);
    document.removeEventListener('mouseup', stopSliding);
}

function handleTapSlider(event) {
    event.preventDefault();

    document.addEventListener('mousemove', onMoveSlider);
    document.addEventListener('mouseup', stopSliding);
}

const FiltersBlock = () => {
    const filters = {
        Price: { type: 0, items: ['From', 'To'] },
        Brand: { type: 1, items: ['AMD', 'Intel'] },
        Model: {
            type: 1,
            items: ['Intel Core i5', 'Intel Core i7', 'Intel Core i9'],
        },
    };

    return (
        <div className="filters-container">
            <ul className="filters-list">
                {Object.keys(filters).map((category, id) => (
                    <Filter
                        key={id}
                        category={category}
                        type={filters[category].type}
                        items={filters[category].items}
                    />
                ))}
                <li className="filters-slider">
                    Range slider
                    <div>
                        <span id="slider" style={{ left: 0 }} onMouseDown={handleTapSlider}></span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default FiltersBlock;

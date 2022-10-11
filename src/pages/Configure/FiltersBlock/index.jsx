import React from 'react';

import './filtersblock.scss';

const ArrowIcon = () => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2.2">
            <path d="M18 9L12 15L6 9" />
        </svg>
    );
};

const FiltersBlock = () => {
    const filters = {
        Price: ['$100', '$200'],
        Brand: ['AMD', 'Intel'],
        Model: [
            'AMD Ryzen 3',
            'AMD Ryzen 5',
            'AMD Ryzen 7',
            'AMD Ryzen 9',
            'Intel Core i3',
            'Intel Core i5',
            'Intel Core i7',
            'Intel Core i9',
        ],
    };

    return (
        <div className="filters-container">
            <ul className="filters-list">
                {Object.keys(filters).map((category) => (
                    <li className="filters-list__item">
                        <h3>{category}</h3>
                        <ArrowIcon />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FiltersBlock;

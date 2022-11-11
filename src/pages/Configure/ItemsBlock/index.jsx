import React from 'react';

import './items.scss';

import ItemCard from './ItemCard';

const products = [
    [
        { name: 'CPU', items: ['Intel', 'Intel', 'Amd', 'Amd', 'Amd', 'Intel'] },
        { name: 'Video Card', items: ['RTX 3060', 'RTX 3070', 'RTX 3080', 'RTX 3080', 'RTX 3080'] },
        { name: 'Motherboard', items: ['Gigabyte', 'Gigabyte', 'Msi', 'Msi', 'Asus'] },
        { name: 'CPU Cooling', items: ['', '', '', '', '', '', ''] },
        { name: 'RAM', items: ['Kingston', 'G Skill', '', ''] },
        { name: 'Storage', items: [] },
        { name: 'Power Supply', items: [] },
        { name: 'Case', items: [] },
    ],
    [
        { name: 'Monitor', items: ['Dell', 'Asus', 'LG', 'LG', 'Asus', 'AOC'] },
        { name: 'Keyboard', items: ['Dark Project', 'Cooler Master', '', '', ''] },
    ],
    [
        { name: 'Color', items: ['', ''] },
        { name: 'RGB', items: ['', '', '', '', ''] },
    ],
    [],
];

const ItemsBlock = ({ currentCategory, currentOption }) => {
    return (
        <div className="items-container">
            <div className="items-grid">
                {products[currentCategory][currentOption].items.map((elem, id) => (
                    <ItemCard key={id} name={elem} />
                ))}
            </div>
        </div>
    );
};

export default ItemsBlock;

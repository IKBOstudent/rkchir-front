import React from 'react';

import './items.scss';

import ItemCard from './ItemCard';

const products = [
    [
        { name: 'CPU', items: ['Intel', 'Intel', 'Amd', 'Amd', 'Amd', 'Intel'] },
        { name: 'Video Card', items: ['RTX 3060', 'RTX 3070', 'RTX 3080', 'RTX 3080', 'RTX 3080'] },
        { name: 'Motherboard', items: ['Gigabyte', 'Gigabyte', 'Msi', 'Msi', 'Asus'] },
        { name: 'CPU Cooling', items: ['Corsair', 'DEEPCOOL GAMMAXX', 'AeroCool Cylon 4'] },
        { name: 'RAM', items: ['2 x Kingston 16GB', '4 x G Skill 8GB'] },
        { name: 'Storage', items: ['Samsung Evo NVMe SSD 1TB', 'WD Blue 5TB', '8TB Seagate'] },
        { name: 'Power Supply', items: ['Super Flower', 'Corsair', 'DEEPCOOL'] },
        { name: 'Case', items: ['Corsair', 'Fractal Design', 'AeroCool', 'Cougar'] },
    ],
    [
        { name: 'Monitor', items: ['Dell', 'Asus', 'LG', 'LG', 'Asus', 'AOC'] },
        { name: 'Keyboard', items: ['Logitech', 'Dark Project', 'Cooler Master', 'Razer'] },
        { name: 'Mouse', items: ['Logitech', 'Razer'] },
    ],
    [
        { name: 'Glass Print', items: ['first', 'second'] },
        { name: 'RGB', items: ['Red', 'Blue'] },
    ],
    [
        { name: 'OS', items: ['Windows 10 Home', 'Windows 11 Home'] },
        { name: 'Office', items: ['Microsoft Office 365'] },
        { name: 'Antivirus', items: ['Kaspersky Internet Security 2022'] },
    ],
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

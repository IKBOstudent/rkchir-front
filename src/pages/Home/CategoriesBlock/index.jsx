import React from 'react';

import './categories.scss';

import monitor from '@assets/monitor_small.png';
import laptop from '@assets/laptop.png';
import desktopPC from '@assets/img_pc4.png';
import components from '@assets/components.png';
import console from '@assets/console.png';

const CategoriesBlock = () => {
    const images = [
        [laptop, 'Gaming Laptops'],
        [monitor, 'Monitors'],
        [desktopPC, 'Desktop PCs'],
        [components, 'Components'],
        [console, 'Console Gaming'],
    ];

    return (
        <div id="categories-block" className="categories-container">
            <div className="categories-menu">
                <ul>
                    {images.map((item, id) => (
                        <li key={id} className="categories-menu__item">
                            <a href="#">
                                <img src={item[0]} alt="" />
                            </a>
                            <span>{item[1]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CategoriesBlock;

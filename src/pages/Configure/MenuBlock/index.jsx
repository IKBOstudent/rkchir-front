import React from 'react';

import './menublock.scss';

const MenuBlock = () => {
    return (
        <div className="configure-menu-container">
            <div className="configure-menu-buttons">
                <div className="configure-menu-form">
                    <label htmlFor="filter-form">Choose product</label>
                    <svg
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        focusable="false">
                        <title>Arrow Icon</title>
                        <path d="M7.066 1.5L4 6.099.934 1.5h6.132z"></path>
                    </svg>
                    <select id="filter-form" defaultValue="CPU">
                        <option value="CPU">CPU</option>
                        <option value="Video Card">Video Card</option>
                        <option value="Motherboard">Motherboard</option>
                        <option value="CPU Cooling">CPU Cooling</option>
                        <option value="RAM">RAM</option>
                        <option value="Storage">Storage</option>
                        <option value="Power Supply">Power Supply</option>
                        <option value="Case">Case</option>
                    </select>
                </div>
            </div>
            <div className="configure-menu-sort">
                <label htmlFor="sort-form">
                    sort by
                    <select id="sort-form" defaultValue="popular">
                        <option value="popular">popular</option>
                        <option value="popular">price</option>
                    </select>
                </label>

                <span>120 results</span>
            </div>
        </div>
    );
};

export default MenuBlock;

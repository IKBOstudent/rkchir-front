import React from 'react';

import './menublock.scss';

const MenuBlock = () => {
    return (
        <div className="configure-menu-container">
            <div className="configure-menu-buttons">
                <div className="configure-menu-form">
                    <select defaultValue="CPU" form="filter-form" id="filter-form">
                        <option value="CPU">CPU</option>
                        <option value="Video Card">Video Card</option>
                        <option value="Motherboard">Motherboard</option>
                        <option value="CPU Cooling">CPU Cooling</option>
                        <option value="RAM">RAM</option>
                        <option value="Storage">Storage</option>
                        <option value="Power Supply">Power Supply</option>
                        <option value="Case">Case</option>
                    </select>
                    <svg
                        viewBox="0 0 8 8"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-hidden="true"
                        aria-label="dropdown">
                        <title>Arrow Icon</title>
                        <path d="M7.066 1.5L4 6.099.934 1.5h6.132z"></path>
                    </svg>
                    <label htmlFor="#filter-form">
                        <span>Choose product</span>
                    </label>
                </div>
            </div>
            <span>120 results</span>
        </div>
    );
};

export default MenuBlock;

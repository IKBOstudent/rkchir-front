import React from 'react';

import './menublock.scss';

const MenuBlock = ({ options, selectedOption, setOption }) => {
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
                    <select
                        id="filter-form"
                        defaultValue={selectedOption}
                        onChange={(event) => setOption(event.target.value)}>
                        {options.map((item, id) => (
                            <option key={id} value={id}>
                                {item}
                            </option>
                        ))}
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

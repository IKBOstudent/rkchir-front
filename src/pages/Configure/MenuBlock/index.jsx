import React from "react";
import { SortContext } from "..";

import "./menublock.scss";

const MenuBlock = ({ options, selectedOption, setOption }) => {
    const { sort, setSort } = React.useContext(SortContext);
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
                        focusable="false"
                    >
                        <title>Arrow Icon</title>
                        <path d="M7.066 1.5L4 6.099.934 1.5h6.132z"></path>
                    </svg>
                    <select
                        id="filter-form"
                        defaultValue={selectedOption}
                        onChange={event => setOption(event.target.value)}
                    >
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
                    <select
                        id="sort-form"
                        defaultValue="popular"
                        onChange={event => {
                            setSort(prev => ({ ...prev, name: event.target.value }));
                        }}
                    >
                        <option value="popular">popular</option>
                        <option value="price">price</option>
                    </select>
                    <button
                        type="button"
                        id="sort-direction"
                        onClick={() => {
                            setSort(prev => ({ ...prev, asc: !prev.asc }));
                        }}
                    >
                        <svg
                            style={sort.asc ? { transform: "rotate(180deg)" } : {}}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-hidden="true"
                            fill="black"
                            width="24"
                        >
                            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                        </svg>
                    </button>
                </label>

                <span>12 results</span>
            </div>
        </div>
    );
};

export default MenuBlock;

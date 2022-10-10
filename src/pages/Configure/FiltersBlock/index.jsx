import React from "react";

import "./filtersblock.scss";

const FiltersBlock = () => {
    const filters = {
        price: ["$100", "$200"],
        brand: ["AMD", "Intel"],
        model: [
            "AMD Ryzen 3",
            "AMD Ryzen 5",
            "AMD Ryzen 7",
            "AMD Ryzen 9",
            "Intel Core i3",
            "Intel Core i5",
            "Intel Core i7",
            "Intel Core i9",
        ],
    };

    return (
        <div className="filters-container">
            <ul className="filters-list">
                {Object.keys(filters).map(category => (
                    <li>
                        <h3>{category}</h3>
                        {filters[category].map(item => (
                            <li>{item}</li>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FiltersBlock;

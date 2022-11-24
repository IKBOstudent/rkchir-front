import React from "react";
import Filter from "./Filter";

import "./filtersblock.scss";

const FiltersBlock = () => {
    const filters = {
        Price: { type: 0, items: ["From", "To"] },
        Brand: { type: 1, items: ["AMD", "Intel"] },
        Model: {
            type: 1,
            items: ["Intel Core i5", "Intel Core i7", "Intel Core i9"],
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
            </ul>
        </div>
    );
};

export default FiltersBlock;

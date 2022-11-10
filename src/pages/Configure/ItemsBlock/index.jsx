import React from "react";

import "./items.scss";

import ItemCard from "./ItemCard";

const ItemsBlock = () => {
    return (
        <div className="items-container">
            <div className="items-grid">
                {[1, 2, 3, 4, 5, 6].map((elem, id) => (
                    <ItemCard key={id} num={elem} />
                ))}
            </div>
        </div>
    );
};

export default ItemsBlock;

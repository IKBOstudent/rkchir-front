import React from 'react';

import './items.scss';

import ItemCard from './ItemCard';

const ItemsBlock = () => {
    return (
        <div className="items-container">
            <div className="items-grid">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    );
};

export default ItemsBlock;

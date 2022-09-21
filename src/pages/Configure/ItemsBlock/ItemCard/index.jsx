import React from 'react';

import './item-card.scss';

const ItemCard = () => {
    return (
        <div className="item-card card">
            <a href="/">
                <h3>Title</h3>
                <img src="" alt="" />
                <span>asdf</span>
                <span>$299.00</span>
            </a>
        </div>
    );
};

export default ItemCard;

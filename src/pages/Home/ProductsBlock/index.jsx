import React from 'react';

import CardBlock from './CardBlock';

import './products.scss';

const ProductsBlock = () => {
    return (
        <div className="products-container" id="first-products">
            <h1>Explore products</h1>

            <div className="products-box">
                <h2>Most popular</h2>
                <CardBlock />
                <CardBlock />
                <CardBlock />
                <CardBlock />
            </div>

            <div className="products-box" id="second-products">
                <h2>Main Block</h2>
                <CardBlock />
                <CardBlock />
                <CardBlock />
                <CardBlock />
            </div>

            <div className="products-box" id="third-products">
                <h2>Third Block</h2>
                <CardBlock />
                <CardBlock />
                <CardBlock />
                <CardBlock />
            </div>
        </div>
    );
};

export default ProductsBlock;

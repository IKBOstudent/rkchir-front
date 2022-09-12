import React from 'react';

import CardBlock from './CardBlock';

import './products.scss';

const ProductsBlock = () => {
    return (
        <div className="products-container">
            <h1>Explore products</h1>

            <div className="products-box" id="first-products">
                <h2>First products</h2>
                <div className="products-box-grid">
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                </div>
            </div>

            <div className="products-box" id="second-products">
                <h2>Second products</h2>
                <div className="products-box-grid">
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                </div>
            </div>

            <div className="products-box" id="third-products">
                <h2>Third products</h2>
                <div className="products-box-grid">
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                    <CardBlock />
                </div>
            </div>

            <ul style={{ listStyle: 'none' }}>
                <li style={{ height: '8rem' }}>Plain text</li>
                <li style={{ height: '8rem' }}>Plain text</li>
                <li style={{ height: '8rem' }}>Plain text</li>
                <li style={{ height: '8rem' }}>Plain text</li>
                <li style={{ height: '8rem' }}>Plain text</li>
            </ul>
        </div>
    );
};

export default ProductsBlock;

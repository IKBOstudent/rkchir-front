import React from "react";

import ProductCard from "./ProductCard";

import "./products.scss";

const ProductsBlock = () => {
    return (
        <div id="products-block" className="products-container">
            <h2>Explore products</h2>

            <div className="products-box">
                <h3>products 1</h3>
                <div className="products-box-grid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className="products-box">
                <h3>products 2</h3>
                <div className="products-box-grid">
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default ProductsBlock;

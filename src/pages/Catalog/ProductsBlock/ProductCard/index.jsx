import React from "react";

import "./product-card.scss";

const ProductCard = ({ image_url }) => {
    return (
        <div className="products-card-box card">
            <a href="#">
                <img src={image_url} alt="" />
                <div>
                    <h3>Title</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolores!</p>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;

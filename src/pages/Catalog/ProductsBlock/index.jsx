import React from "react";

import ProductCard from "./ProductCard";

import "./products.scss";

import img_proc1 from "@assets/prod_1.png";
import img_proc3 from "@assets/prod_3.png";
import back_img from "@assets/img5.jpg";

const ProductsBlock = () => {
    const images = [img_proc1, img_proc3, img_proc1, img_proc1, img_proc3, img_proc1];

    return (
        <div id="products-block" className="products-container">
            <h2>Explore products</h2>

            <div className="products-box">
                <h3>products 1</h3>
                <div className="products-box-grid">
                    {images.map((item, id) => (
                        <ProductCard key={id} image_url={item} />
                    ))}
                </div>
            </div>
            {/* <div className="products-box" >
                <h3>products 2</h3>
                <div className="products-box-grid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div> */}
        </div>
    );
};

export default ProductsBlock;

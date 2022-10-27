import React from "react";

import ProductCard from "./ProductCard";

import "./products.scss";

import img_intel_i5 from "@assets/intel_i5.png";
import img_intel_i7 from "@assets/intel_i7.png";
import img_intel_i9 from "@assets/intel_i9.png";

import monitor from "@assets/monitor.png";
import mouse from "@assets/mouse.png";
import keyboard from "@assets/keyboard.png";
import headphones from "@assets/headphones.png";
import webcam from "@assets/webcam.png";
import mic from "@assets/mic.png";
import mat from "@assets/mat.png";

const ProductsBlock = () => {
    // const images = [img_intel_i7, img_intel_i5, img_intel_i9, img_intel_i7, img_intel_i9, img_intel_i5, img_intel_i7];

    const images = [monitor, webcam, mouse, headphones, keyboard, mat, mic];

    return (
        <div id="products-block" className="products-container">
            <h2>Explore products</h2>

            <div className="products-box">
                <h3>products 1</h3>
                <div className="products-box-grid">
                    {[1, 2, 3].map((item, id) => (
                        <ProductCard />
                    ))}
                </div>
            </div>
            <div className="products-box">
                <h3>Peripherals</h3>
                <div className="products-box-photoGrid">
                    {images.map((item, id) => (
                        <div className="products-box-photoGrid__item card">
                            <img src={item} alt="" />
                            {/* <span>CPU</span> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsBlock;

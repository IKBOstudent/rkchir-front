import React from "react";

import ProductCard from "./ProductCard";

import "./products.scss";

import monitor from "@assets/monitor.png";
import mouse from "@assets/mouse.png";
import keyboard from "@assets/keyboard.png";
import headphones from "@assets/headphones.png";
import webcam from "@assets/webcam.png";
import mic from "@assets/mic.png";
import mat from "@assets/mat.png";

import img_intel_i5 from "@assets/intel_i5.png";
import { Link } from "react-router-dom";

const ProductsBlock = () => {
    // const images = [img_intel_i7, img_intel_i5, img_intel_i9, img_intel_i7, img_intel_i9, img_intel_i5, img_intel_i7];

    const images = [monitor, webcam, mouse, headphones, keyboard, mat, mic];

    return (
        <div id="products-block" className="products-container">
            <h2>Explore products</h2>
            <div className="products-box">
                <h3>PC components</h3>
                <div className="products-box-photoGrid">
                    {[...Array(7).fill(img_intel_i5)].map((item, id) => (
                        <div key={id} className="products-box-photoGrid__item card">
                            <Link to={"/item/0" + id}>
                                <img src={item} alt="" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="products-box">
                <h3>Peripherals</h3>
                <div className="products-box-photoGrid">
                    {images.map((item, id) => (
                        <div key={id} className="products-box-photoGrid__item card">
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsBlock;

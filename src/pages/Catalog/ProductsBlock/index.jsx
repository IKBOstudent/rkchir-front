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

    function handleClickImage(event, id) {
        event.preventDefault();
        const children = event.target.parentElement.children;
        for (let child of children) {
            if (!event.ctrlKey) {
                child.classList.remove("image-selected");
            }
            if (child === event.target) {
                child.classList.add("image-selected");
            }
        }
    }

    return (
        <div id="products-block" className="products-container">
            <h2>Explore products</h2>
            <div className="products-box">
                <h3>PC components</h3>
                <div onMouseDown={e => e.preventDefault()} className="products-box-photoGrid">
                    {[...Array(7).fill(img_intel_i5)].map((item, id) => (
                        <div
                            key={id}
                            className="products-box-photoGrid__item"
                            onClick={event => {
                                handleClickImage(event, id);
                            }}
                        >
                            {/* <Link to={"/item/0" + id}> */}
                            <img src={item} alt="item" />
                            {/* </Link> */}
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="products-box">
                <h3>Peripherals</h3>
                <div className="products-box-photoGrid">
                    {images.map((item, id) => (
                        <div key={id} className="products-box-photoGrid__item card">
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default ProductsBlock;

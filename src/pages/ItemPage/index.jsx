import React from "react";

import "./item-page.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

import img_pc2 from "@assets/img_pc2.png";

const ItemPage = () => {
    return (
        <>
            <Header />
            <main>
                <article className="item-container">
                    <div className="item-box">
                        <div className="item-img">
                            <img src={img_pc2} alt="item" />
                            <ul>
                                <li>
                                    <img src={img_pc2} alt="item" />
                                </li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>

                        <ul className="item-text">
                            <li>
                                <h2>PC item n1</h2>
                                <sub>Sub text</sub>
                            </li>

                            <li className="item-text-buy">
                                <h1>$ 1,299.00</h1>
                                <button className="button-animated">
                                    <span>ADD TO CART</span>
                                </button>
                                <h5>10 IN STOCK WITH 30 DAYS FREE RETURNS</h5>
                            </li>

                            <li>
                                <p>First</p>
                                <p>Second</p>
                                <p>Third</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
};

export default ItemPage;

import React from 'react';

import CardBlock from './CardBlock';

import './products.scss';
import main_img from '@assets/image2.png';
import map from '@assets/image1.jpg';

const ProductsBlock = () => {
    return (
        <div className="products-container">
            <div className="products-image">
                <img src={main_img} alt="Main pic" />
            </div>

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

            <h2>Menu</h2>
            <div className="products-menu">
                <ol>
                    <li className="products-menu-item">
                        <a href="#">
                            <h3>Item 1</h3>
                            <ul>
                                <li>list element</li>
                                <li>list element</li>
                                <li>list element</li>
                                <li>list element</li>
                            </ul>
                        </a>
                    </li>
                    <li className="products-menu-item">
                        <a href="#">
                            <h3>Item i</h3>
                        </a>
                    </li>
                    <li className="products-menu-item">
                        <a href="#">
                            <h3>Item i</h3>
                        </a>
                    </li>
                    <li className="products-menu-item">
                        <a href="#">
                            <h3>Item i</h3>
                        </a>
                    </li>
                    <li className="products-menu-item">
                        <a href="#">
                            <h3>Item i</h3>
                        </a>
                    </li>
                </ol>
            </div>

            <h2>Map</h2>
            <div className="map">
                <map name="shapes">
                    <area shape="rect" coords="0, 0, 600, 100" href="#area1" />
                </map>
                <img src={map} height="600" width="900" usemap="#shapes" alt="map_img" />
            </div>
        </div>
    );
};

export default ProductsBlock;

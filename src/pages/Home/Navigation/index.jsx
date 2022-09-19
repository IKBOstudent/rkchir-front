import React from "react";

import "./navigation.scss";

const Navigation = () => {
    return (
        <nav>
            <div className="nav-container">
                <ol className="nav-list">
                    <li className="nav-list-link current">
                        <a href="#builds-block">
                            <sup>01</sup>
                            <strong>Builds</strong>
                        </a>
                    </li>
                    <li className="nav-list-link">
                        <a href="#categories-block">
                            <sup>02</sup>
                            <strong>Categories</strong>
                        </a>
                    </li>
                    <li className="nav-list-link">
                        <a href="#products-block">
                            <sup>03</sup>
                            <strong>Products</strong>
                        </a>
                    </li>
                </ol>
            </div>
        </nav>
    );
};

export default Navigation;

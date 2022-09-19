import React from "react";

import "./categories.scss";

const CategoriesBlock = () => {
    return (
        <div id="categories-block" className="categories-container">
            <h2>Menu</h2>

            <div className="categories-menu">
                <ul>
                    <li className="categories-menu-item">
                        <a href="#">
                            <h3>Item 1</h3>
                        </a>
                    </li>
                    <li className="categories-menu-item">
                        <a href="#">
                            <h3>Item 2</h3>
                        </a>
                    </li>
                    <li className="categories-menu-item">
                        <a href="#">
                            <h3>Item 3</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CategoriesBlock;

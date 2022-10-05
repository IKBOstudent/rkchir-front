import React from "react";

import "./menublock.scss";

const MenuBlock = () => {
    return (
        <div className="configure-menu-container">
            <ul className="configure-menu-list">
                <li className="configure-menu-list-item configure-menu-list-item-active">
                    <a href="#">CPU</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">Video Card</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">Motherboard</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">CPU Cooling</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">RAM</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">Storage</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">PowerSupply</a>
                </li>
                <li className="configure-menu-list-item">
                    <a href="#">Case</a>
                </li>
            </ul>
        </div>
    );
};

export default MenuBlock;

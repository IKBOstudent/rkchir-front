import React from "react";

import "./item-card.scss";

const ItemCard = ({ num }) => {
    return (
        <div className="item-card card">
            <a href="#">
                <h3>Title</h3>
                <img src="" alt="" />
                <span>asdf</span>
                <span>$299.00</span>
            </a>

            <ul className="item-card-buttons">
                <li style={{ "--delay": 1 }}>
                    <button className="button-default">
                        <span>About</span>
                    </button>
                </li>
                <li style={{ "--delay": 3 }}>
                    <button className="button-default button-add-item" style={{ backgroundColor: "#0b091c" }}>
                        <span style={{ pointerEvents: "none" }}>+</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ItemCard;

import React from "react";

import "./item-card.scss";
import { Link } from "react-router-dom";
const ItemCard = ({ content }) => {
    return (
        <div className="item-card card">
            <Link to={"/item/000" + content.id}>
                <div>
                    <h3>{content?.name}</h3>
                    <span className="trunc">{"Some text"}</span>
                </div>

                <h2>{`$ ${content?.price.toFixed(2)}`}</h2>
            </Link>

            <div className="item-card-img" style={{ backgroundImage: `url(${content?.imgUrl})` }}></div>

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

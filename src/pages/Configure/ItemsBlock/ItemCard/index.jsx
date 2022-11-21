import React from "react";

import "./item-card.scss";

import intel_i5 from "@assets/intel_i5.png";
import { Link } from "react-router-dom";

const ItemCard = ({ name, id }) => {
    function truncate(str, maxLen = 16) {
        str = str.trim();
        str = str.length > maxLen ? str.slice(0, maxLen - 3) + "..." : str;
        return str;
    }

    React.useEffect(() => {
        const items = document.querySelectorAll(".trunc");
        for (const i of items) {
            i.textContent = truncate("Some text larger than");
        }
    }, []);

    return (
        <div className="item-card card">
            <Link to={"/item/000" + id}>
                <div>
                    <h3>{name}</h3>
                    <span className="trunc"></span>
                </div>

                <h2>$299.00</h2>
            </Link>

            <div className="item-card-img" style={{ backgroundImage: `url(${intel_i5})` }}></div>

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

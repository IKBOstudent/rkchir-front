import React from "react";

import "./build-card.scss";

const BuildCard = ({ image_url }) => {
    return (
        <div className="builds-card-box card">
            <a href="#">
                <img src={image_url} alt="" />

                <h4>PC Assembled Gaming I7-12700 – RTX 3070 8GB</h4>
            </a>
            <span>$2,440.00</span>
        </div>
    );
};

export default BuildCard;

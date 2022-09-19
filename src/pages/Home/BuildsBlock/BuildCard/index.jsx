import React from "react";

import "./build-card.scss";

const BuildCard = () => {
    return (
        <div className="builds-card-box card">
            <a href="/">
                <h3>Title</h3>
                <span>
                    An <i>item</i> from list
                </span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, dolores!</p>
            </a>
        </div>
    );
};

export default BuildCard;

import React from "react";

import "./builds.scss";

import BuildCard from "./BuildCard";

const BuildsBlock = () => {
    return (
        <div id="builds-block" className="builds-container">
            <h2>Builds</h2>

            <div className="builds-box-grid">
                <BuildCard />
                <BuildCard />
                <BuildCard />
            </div>
        </div>
    );
};

export default BuildsBlock;

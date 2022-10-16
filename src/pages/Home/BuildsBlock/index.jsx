import React from "react";

import "./builds.scss";

import BuildCard from "./BuildCard";

import img_pc1 from "@assets/img_pc1.png";
import img_pc2 from "@assets/img_pc2.png";
import img_pc3 from "@assets/img_pc3.png";

const BuildsBlock = () => {
    const images = [img_pc1, img_pc2, img_pc3, img_pc2, img_pc1];
    return (
        <div id="builds-block" className="builds-container">
            <h2>Builds</h2>

            <div className="builds-box-grid">
                {images.map((item, id) => (
                    <BuildCard key={id} image_url={item} />
                ))}
            </div>
        </div>
    );
};

export default BuildsBlock;

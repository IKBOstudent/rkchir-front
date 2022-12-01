import React from "react";
import { Link } from "react-router-dom";

import "./build-card.scss";

const BuildCard = ({ id, image_url }) => {
    return (
        <div className="builds-card-background card">
            <div className="builds-card-box">
                <div className="builds-card-box__top">
                    <div className="builds-card-box-img" style={{ backgroundImage: `url(${image_url})` }}></div>

                    <h4>PC Assembled Gaming i7-12700K – RTX 3070 8GB</h4>
                </div>
                <div className="builds-card-box__bottom">
                    <Link to={"/item/" + id}>
                        <button className="button-shop">
                            <span>SHOP NOW</span>
                        </button>
                    </Link>

                    <button className="button-clear">
                        <span>Learn more </span>
                        <svg
                            width="14"
                            height="20"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth="2"
                        >
                            <path d="M14 18L8 12L14 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuildCard;

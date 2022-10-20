import React from 'react';

import './build-card.scss';

const SaveIcon = () => {
    return (
        <button type="button" className="button-icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 24"
                fill="none"
                role="img"
                aria-hidden="true"
                strokeWidth="1.5"
                height="24">
                <title>Saved Icon</title>
                <path d="M16.059 23.105l-6.177-4.492a1.5 1.5 0 00-1.764 0l-6.177 4.492A.75.75 0 01.75 22.5V2.25a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V22.5a.75.75 0 01-1.191.605v0z"></path>
            </svg>
        </button>
    );
};

const BuildCard = ({ image_url }) => {
    return (
        <div className="builds-card-box card">
            <div className="builds-card-box__top">
                <a href="#">
                    <div
                        className="builds-card-box-img"
                        style={{ backgroundImage: `url(${image_url})` }}></div>

                    <h4>PC Assembled Gaming i7-12700 – RTX 3070 8GB</h4>
                </a>
                <SaveIcon />
            </div>
            <div className="builds-card-box__bottom">
                <span>$2,440.00</span>
            </div>
        </div>
    );
};

export default BuildCard;

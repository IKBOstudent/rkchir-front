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
        <div className="builds-card-background card">
            <div className="builds-card-box">
                <div className="builds-card-box__top">
                    <div
                        className="builds-card-box-img"
                        style={{ backgroundImage: `url(${image_url})` }}></div>

                    <h4>PC Assembled Gaming i7-12700K – RTX 3070 8GB</h4>
                </div>
                <div className="builds-card-box__bottom">
                    <button className="button-shop">
                        <span>SHOP NOW</span>
                    </button>

                    <button className="button-clear">
                        <span>Learn more </span>
                        <svg
                            width="14"
                            height="20"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            strokeWidth="2">
                            <path d="M14 18L8 12L14 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuildCard;

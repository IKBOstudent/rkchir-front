import React from "react";

import SearchButton from "./Icons/search-button";
import SavedButton from "./Icons/saved-button";

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <ul className="header-bar">
                <li className="header-bar__item logo">
                    <a href="/">
                        <span>PC_PARTS</span>
                    </a>
                </li>

                <li className="header-bar__item search">
                    <SearchButton />
                </li>
                <li className="header-bar__item">
                    <SavedButton />
                </li>

                <li className="header-bar__item">
                    <button type="button" className="button-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            role="img"
                            aria-hidden="true"
                            strokeWidth="1.5"
                        >
                            <title>Menu Icon</title>
                            <path d="M2.25 18.003h19.5m-19.5-6h19.5m-19.5-6h19.5"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default MobileHeader;

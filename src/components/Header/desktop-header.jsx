import React from "react";
import SavedButton from "./Icons/saved-button";
import SearchButton from "./Icons/search-button";

const DesktopHeader = () => {
    return (
        <div className="desktop-header">
            <ul className="header-bar">
                <li className="header-bar__item logo">
                    <a href="/">
                        <span>PC_PARTS</span>
                    </a>
                </li>
                <li className="header-bar__item">
                    <a href="/">
                        <span>Home</span>
                    </a>
                </li>
                <li className="header-bar__item">
                    <a href="/">
                        <span>Catalog</span>
                    </a>
                </li>

                <li className="header-bar__item">
                    <a href="/">
                        <span>Configure</span>
                    </a>
                </li>

                <li className="header-bar__item search">
                    <SearchButton />
                </li>
                <li className="header-bar__item">
                    <SavedButton />
                </li>

                <li className="header-bar__item">
                    <button type="button" className="button-default">
                        <span>Sign up</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DesktopHeader;

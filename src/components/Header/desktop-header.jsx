import React from "react";

import CalculatorsDropdown from "./Dropdowns/CalculatorsDropdown";
import SavedDropdown from "./Dropdowns/SavedDropdown";
import SearchDropdown from "./Dropdowns/SearchDropdown";

import SavedButton from "./Buttons/saved-button";
import SearchButton from "./Buttons/search-button";
import CalculatorsButton from "./Buttons/calculators-button";

const DesktopHeader = () => {
    return (
        <div className="desktop-header">
            <ul className="header-bar">
                <li className="header-bar__item header-bar__item-logo">
                    <a href="/" className="header-bar__item-link">
                        <span>PC_PARTS</span>
                    </a>
                </li>
                <li className="header-bar__item">
                    <a href="/" className="header-bar__item-link">
                        <span>Home</span>
                    </a>
                </li>
                <li className="header-bar__item">
                    <a href="/catalog" className="header-bar__item-link">
                        <span>Catalog</span>
                    </a>
                </li>

                <li className="header-bar__item">
                    <a href="/configure" className="header-bar__item-link">
                        <span>Configure</span>
                    </a>
                </li>

                <li className="header-bar__item header-bar__item-calc">
                    <CalculatorsButton />
                    <CalculatorsDropdown />
                </li>

                <li className="header-bar__item header-bar__item-icon header-search">
                    <SearchButton />
                    <SearchDropdown />
                </li>
                <li className="header-bar__item header-bar__item-icon">
                    <SavedButton />
                    <SavedDropdown />
                </li>

                <li className="header-bar__item">
                    <a href="/register">
                        <button type="button" className="button-default">
                            <span>Sign up</span>
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default DesktopHeader;

import React from 'react';
import CalculatorsDropdown from './Dropdowns/CalculatorsDropdown';
import SavedDropdown from './Dropdowns/SavedDropdown';
import SearchDropdown from './Dropdowns/SearchDropdown';

import SavedButton from './Icons/saved-button';
import SearchButton from './Icons/search-button';

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
                    <button type="button" className="header-bar__item-link">
                        <span>Calculators</span>
                        <svg
                            viewBox="0 0 8 8"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-hidden="true"
                            aria-label="dropdown">
                            <title>Arrow Icon</title>

                            <path d="M7.066 1.5L4 6.099.934 1.5h6.132z"></path>
                        </svg>
                    </button>

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
                    <button type="button" className="button-default">
                        <span>Sign up</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DesktopHeader;

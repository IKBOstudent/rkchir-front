import React from 'react';

import SearchButton from './Icons/search-button';
import SavedButton from './Icons/saved-button';
import MenuButton from './Icons/menu-button';

const MobileHeader = () => {
    return (
        <div className="mobile-header">
            <ul className="header-bar">
                <li className="header-bar__item header-bar__item-logo">
                    <a href="/" className="header-bar__item-link">
                        <span>PC_PARTS</span>
                    </a>
                </li>

                <li className="header-bar__item header-bar__item-icon header-search">
                    <SearchButton />
                </li>
                <li className="header-bar__item header-bar__item-icon">
                    <SavedButton />
                </li>

                <li className="header-bar__item header-bar__item-icon">
                    <MenuButton />
                </li>
            </ul>
        </div>
    );
};

export default MobileHeader;
